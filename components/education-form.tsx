"use client"

import { useState } from "react"
import { useResume } from "@/context/resume-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus, ChevronDown, ChevronUp, MoveUp, MoveDown } from "lucide-react"

export function EducationForm() {
  const { state, dispatch } = useResume()
  const { educations } = state
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleChange = (id: string, field: string, value: string) => {
    const updatedEducation = educations.find((edu) => edu.id === id)
    if (updatedEducation) {
      dispatch({
        type: "UPDATE_EDUCATION",
        payload: { ...updatedEducation, [field]: value },
      })
    }
  }

  const handleAddEducation = () => {
    dispatch({
      type: "ADD_EDUCATION",
      payload: {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        location: "",
        gpa: "",
      },
    })
  }

  const handleRemoveEducation = (id: string) => {
    dispatch({ type: "REMOVE_EDUCATION", payload: id })
    if (expandedId === id) {
      setExpandedId(null)
    }
  }

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const moveEducation = (index: number, direction: "up" | "down") => {
    if ((direction === "up" && index === 0) || (direction === "down" && index === educations.length - 1)) {
      return
    }

    const newIndex = direction === "up" ? index - 1 : index + 1
    dispatch({
      type: "REORDER_EDUCATION",
      payload: { fromIndex: index, toIndex: newIndex },
    })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Educación</h2>

      <div className="space-y-4">
        {educations.map((education, index) => (
          <Card key={education.id} className="border border-gray-200">
            <CardHeader
              className="p-4 flex flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(education.id)}
            >
              <CardTitle className="text-base">
                {education.institution || "Nueva Educación"}
                {education.degree && ` - ${education.degree}`}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    moveEducation(index, "up")
                  }}
                  disabled={index === 0}
                  className={index === 0 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    moveEducation(index, "down")
                  }}
                  disabled={index === educations.length - 1}
                  className={index === educations.length - 1 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveEducation(education.id)
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === education.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CardHeader>

            {expandedId === education.id && (
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${education.id}`}>Institución</Label>
                    <Input
                      id={`institution-${education.id}`}
                      value={education.institution}
                      onChange={(e) => handleChange(education.id, "institution", e.target.value)}
                      placeholder="Ej. Universidad Tecnológica"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`degree-${education.id}`}>Grado</Label>
                    <Input
                      id={`degree-${education.id}`}
                      value={education.degree}
                      onChange={(e) => handleChange(education.id, "degree", e.target.value)}
                      placeholder="Ej. Licenciatura"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`fieldOfStudy-${education.id}`}>Campo de Estudio</Label>
                    <Input
                      id={`fieldOfStudy-${education.id}`}
                      value={education.fieldOfStudy}
                      onChange={(e) => handleChange(education.id, "fieldOfStudy", e.target.value)}
                      placeholder="Ej. Ingeniería Informática"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`location-${education.id}`}>Ubicación</Label>
                    <Input
                      id={`location-${education.id}`}
                      value={education.location}
                      onChange={(e) => handleChange(education.id, "location", e.target.value)}
                      placeholder="Ej. Ciudad, País"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${education.id}`}>Fecha de Inicio</Label>
                    <Input
                      id={`startDate-${education.id}`}
                      value={education.startDate}
                      onChange={(e) => handleChange(education.id, "startDate", e.target.value)}
                      placeholder="Ej. Sep 2018"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${education.id}`}>Fecha de Finalización</Label>
                    <Input
                      id={`endDate-${education.id}`}
                      value={education.endDate}
                      onChange={(e) => handleChange(education.id, "endDate", e.target.value)}
                      placeholder="Ej. Jun 2022 o Presente"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`gpa-${education.id}`}>Promedio / GPA</Label>
                    <Input
                      id={`gpa-${education.id}`}
                      value={education.gpa}
                      onChange={(e) => handleChange(education.id, "gpa", e.target.value)}
                      placeholder="Ej. 3.8"
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button onClick={handleAddEducation} variant="outline" className="w-full flex items-center justify-center gap-2">
        <Plus className="h-4 w-4" /> Agregar Educación
      </Button>
    </div>
  )
}
