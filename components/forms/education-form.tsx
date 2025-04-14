"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Trash2,
  Plus,
  ChevronDown,
  ChevronUp,
  MoveUp,
  MoveDown,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Education } from "@/lib/types";

interface EducationFormProps {
  educations: Education[];
  setEducations: (educations: Education[]) => void;
}

export function EducationForm({
  educations,
  setEducations,
}: EducationFormProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAddEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
      gpa: "",
      description: "",
      order: educations.length,
    };
    setEducations([...educations, newEducation]);
    setExpandedId(newEducation.id);
  };

  const handleRemoveEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
    if (expandedId === id) {
      setExpandedId(null);
    }
  };

  const handleChange = (id: string, field: string, value: string) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const moveEducation = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === educations.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const newEducations = [...educations];
    const [removed] = newEducations.splice(index, 1);
    newEducations.splice(newIndex, 0, removed);

    // Update order property
    const updatedEducations = newEducations.map((edu, i) => ({
      ...edu,
      order: i,
    }));
    setEducations(updatedEducations);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
        Educación
      </h2>

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
                    e.stopPropagation();
                    moveEducation(index, "up");
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
                    e.stopPropagation();
                    moveEducation(index, "down");
                  }}
                  disabled={index === educations.length - 1}
                  className={
                    index === educations.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveEducation(education.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === education.id ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </CardHeader>

            {expandedId === education.id && (
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${education.id}`}>
                      Institución
                    </Label>
                    <Input
                      id={`institution-${education.id}`}
                      value={education.institution}
                      onChange={(e) =>
                        handleChange(
                          education.id,
                          "institution",
                          e.target.value
                        )
                      }
                      placeholder="Ej. Universidad Tecnológica"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`degree-${education.id}`}>Grado</Label>
                    <Input
                      id={`degree-${education.id}`}
                      value={education.degree}
                      onChange={(e) =>
                        handleChange(education.id, "degree", e.target.value)
                      }
                      placeholder="Ej. Licenciatura"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`fieldOfStudy-${education.id}`}>
                      Campo de Estudio
                    </Label>
                    <Input
                      id={`fieldOfStudy-${education.id}`}
                      value={education.fieldOfStudy}
                      onChange={(e) =>
                        handleChange(
                          education.id,
                          "fieldOfStudy",
                          e.target.value
                        )
                      }
                      placeholder="Ej. Ingeniería Informática"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`location-${education.id}`}>
                      Ubicación
                    </Label>
                    <Input
                      id={`location-${education.id}`}
                      value={education.location}
                      onChange={(e) =>
                        handleChange(education.id, "location", e.target.value)
                      }
                      placeholder="Ej. Ciudad, País"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${education.id}`}>
                      Fecha de Inicio
                    </Label>
                    <Input
                      id={`startDate-${education.id}`}
                      value={education.startDate}
                      onChange={(e) =>
                        handleChange(education.id, "startDate", e.target.value)
                      }
                      placeholder="Ej. Sep 2018"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${education.id}`}>
                      Fecha de Finalización
                    </Label>
                    <Input
                      id={`endDate-${education.id}`}
                      value={education.endDate}
                      onChange={(e) =>
                        handleChange(education.id, "endDate", e.target.value)
                      }
                      placeholder="Ej. Jun 2022 o Presente"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`gpa-${education.id}`}>
                      Promedio / GPA
                    </Label>
                    <Input
                      id={`gpa-${education.id}`}
                      value={education.gpa}
                      onChange={(e) =>
                        handleChange(education.id, "gpa", e.target.value)
                      }
                      placeholder="Ej. 3.8"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label htmlFor={`description-${education.id}`}>
                    Descripción
                  </Label>
                  <Textarea
                    id={`description-${education.id}`}
                    value={education.description}
                    onChange={(e) =>
                      handleChange(education.id, "description", e.target.value)
                    }
                    placeholder="Logros académicos, actividades relevantes, etc."
                    rows={3}
                  />
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button
        onClick={handleAddEducation}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <Plus className="h-4 w-4" /> Agregar Educación
      </Button>
    </div>
  );
}
