"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PersonalInfo } from "@/lib/types"

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo
  setPersonalInfo: (info: PersonalInfo) => void
}

export function PersonalInfoForm({ personalInfo, setPersonalInfo }: PersonalInfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPersonalInfo({ ...personalInfo, [name]: value })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Información Personal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nombre Completo</Label>
          <Input
            id="fullName"
            name="fullName"
            value={personalInfo.fullName || ""}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Título Profesional</Label>
          <Input
            id="title"
            name="title"
            value={personalInfo.title || ""}
            onChange={handleChange}
            placeholder="Ej. Ingeniero de Software"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={personalInfo.email || ""}
            onChange={handleChange}
            placeholder="Ej. juan.perez@ejemplo.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            value={personalInfo.phone || ""}
            onChange={handleChange}
            placeholder="Ej. 123-456-7890"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            name="address"
            value={personalInfo.address || ""}
            onChange={handleChange}
            placeholder="Ej. Ciudad, Estado, Código Postal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Sitio Web</Label>
          <Input
            id="website"
            name="website"
            value={personalInfo.website || ""}
            onChange={handleChange}
            placeholder="Ej. www.juanperez.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Resumen Profesional</Label>
        <Textarea
          id="summary"
          name="summary"
          value={personalInfo.summary || ""}
          onChange={handleChange}
          placeholder="Breve descripción de tu perfil profesional"
          rows={4}
        />
      </div>
    </div>
  )
}
