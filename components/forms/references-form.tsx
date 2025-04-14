"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus, ChevronDown, ChevronUp } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Reference } from "@/lib/types"

interface ReferencesFormProps {
  references: Reference[]
  setReferences: (references: Reference[]) => void
}

export function ReferencesForm({ references, setReferences }: ReferencesFormProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleAddReference = () => {
    const newReference = {
      id: uuidv4(),
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
    }
    setReferences([...references, newReference])
    setExpandedId(newReference.id)
  }

  const handleRemoveReference = (id: string) => {
    setReferences(references.filter((ref) => ref.id !== id))
    if (expandedId === id) {
      setExpandedId(null)
    }
  }

  const handleChange = (id: string, field: string, value: string) => {
    setReferences(references.map((ref) => (ref.id === id ? { ...ref, [field]: value } : ref)))
  }

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Referencias</h2>

      <div className="space-y-4">
        {references.map((reference) => (
          <Card key={reference.id} className="border border-gray-200">
            <CardHeader
              className="p-4 flex flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(reference.id)}
            >
              <CardTitle className="text-base">
                {reference.name || "Nueva Referencia"}
                {reference.company && ` - ${reference.company}`}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveReference(reference.id)
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === reference.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CardHeader>

            {expandedId === reference.id && (
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${reference.id}`}>Nombre completo</Label>
                    <Input
                      id={`name-${reference.id}`}
                      value={reference.name}
                      onChange={(e) => handleChange(reference.id, "name", e.target.value)}
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`position-${reference.id}`}>Cargo</Label>
                    <Input
                      id={`position-${reference.id}`}
                      value={reference.position}
                      onChange={(e) => handleChange(reference.id, "position", e.target.value)}
                      placeholder="Ej. Director de Recursos Humanos"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`company-${reference.id}`}>Empresa</Label>
                    <Input
                      id={`company-${reference.id}`}
                      value={reference.company}
                      onChange={(e) => handleChange(reference.id, "company", e.target.value)}
                      placeholder="Ej. Empresa ABC"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`email-${reference.id}`}>Email</Label>
                    <Input
                      id={`email-${reference.id}`}
                      value={reference.email}
                      onChange={(e) => handleChange(reference.id, "email", e.target.value)}
                      placeholder="Ej. juan.perez@empresa.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`phone-${reference.id}`}>Teléfono</Label>
                    <Input
                      id={`phone-${reference.id}`}
                      value={reference.phone}
                      onChange={(e) => handleChange(reference.id, "phone", e.target.value)}
                      placeholder="Ej. +34 123 456 789"
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button onClick={handleAddReference} variant="outline" className="w-full flex items-center justify-center gap-2">
        <Plus className="h-4 w-4" /> Agregar Referencia
      </Button>
    </div>
  )
}
