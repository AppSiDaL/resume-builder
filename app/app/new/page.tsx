"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { TemplateSelector } from "@/components/template-selector"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createResume } from "@/actions/resume-actions"

export default function NewResumePage() {
  const router = useRouter()
  const [title, setTitle] = useState("Mi Currículum")
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData()
    formData.append("title", title)
    formData.append("templateId", selectedTemplate)

    try {
      const result = await createResume(formData)

      if (!result.success) {
        setError(result.message)
        setIsLoading(false)
        return
      }

      router.push(`/app/${result.resumeId}`)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "An error occurred while updating your profile"
        );
      } else {
        setError("An unknown error occurred while updating your profile");
      }
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Crear nuevo currículum</h1>

          <form onSubmit={handleSubmit}>
            {error && <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">{error}</div>}

            <div className="mb-8">
              <Label htmlFor="title" className="text-lg font-medium mb-2 block">
                Título del currículum
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="max-w-md"
                required
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Este título es solo para tu referencia y no aparecerá en el currículum.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Selecciona una plantilla</h2>
              <TemplateSelector selectedTemplateId={selectedTemplate} onSelectTemplate={setSelectedTemplate} />
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? "Creando..." : "Crear currículum"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
