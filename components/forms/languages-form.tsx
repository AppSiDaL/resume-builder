"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus, ChevronDown, ChevronUp } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Language } from "@/lib/types"

interface LanguagesFormProps {
  languages: Language[]
  setLanguages: (languages: Language[]) => void
}

export function LanguagesForm({ languages, setLanguages }: LanguagesFormProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleAddLanguage = () => {
    const newLanguage = {
      id: uuidv4(),
      name: "",
      level: "Intermedio",
    }
    setLanguages([...languages, newLanguage])
    setExpandedId(newLanguage.id)
  }

  const handleRemoveLanguage = (id: string) => {
    setLanguages(languages.filter((lang) => lang.id !== id))
    if (expandedId === id) {
      setExpandedId(null)
    }
  }

  const handleChange = (id: string, field: string, value: string) => {
    setLanguages(languages.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang)))
  }

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const languageLevels = ["Básico", "Intermedio bajo", "Intermedio", "Avanzado", "Fluido", "Nativo"]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Idiomas</h2>

      <div className="space-y-4">
        {languages.map((language) => (
          <Card key={language.id} className="border border-gray-200">
            <CardHeader
              className="p-4 flex flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(language.id)}
            >
              <CardTitle className="text-base">
                {language.name || "Nuevo Idioma"}
                {language.level && ` - ${language.level}`}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveLanguage(language.id)
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === language.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CardHeader>

            {expandedId === language.id && (
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${language.id}`}>Idioma</Label>
                    <Input
                      id={`name-${language.id}`}
                      value={language.name}
                      onChange={(e) => handleChange(language.id, "name", e.target.value)}
                      placeholder="Ej. Inglés, Español, Francés"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`level-${language.id}`}>Nivel</Label>
                    <select
                      id={`level-${language.id}`}
                      value={language.level}
                      onChange={(e) => handleChange(language.id, "level", e.target.value)}
                      className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      {languageLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button onClick={handleAddLanguage} variant="outline" className="w-full flex items-center justify-center gap-2">
        <Plus className="h-4 w-4" /> Agregar Idioma
      </Button>
    </div>
  )
}
