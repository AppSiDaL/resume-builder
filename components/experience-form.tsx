"use client";

import { useState } from "react";
import { useResume } from "@/context/resume-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Trash2,
  Plus,
  ChevronDown,
  ChevronUp,
  X,
  MoveUp,
  MoveDown,
} from "lucide-react";

export function ExperienceForm() {
  const { state, dispatch } = useResume();
  const { experiences } = state;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newBullet, setNewBullet] = useState<string>("");

  const handleChange = (
    id: string,
    field: string,
    value: string | string[]
  ) => {
    const updatedExperience = experiences.find((exp) => exp.id === id);
    if (updatedExperience) {
      dispatch({
        type: "UPDATE_EXPERIENCE",
        payload: { ...updatedExperience, [field]: value },
      });
    }
  };

  const handleAddExperience = () => {
    dispatch({
      type: "ADD_EXPERIENCE",
      payload: {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: [],
      },
    });
  };

  const handleRemoveExperience = (id: string) => {
    dispatch({ type: "REMOVE_EXPERIENCE", payload: id });
    if (expandedId === id) {
      setExpandedId(null);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAddBullet = (id: string) => {
    if (newBullet.trim()) {
      const experience = experiences.find((exp) => exp.id === id);
      if (experience) {
        const newDescription = [...experience.description, newBullet];
        handleChange(id, "description", newDescription);
        setNewBullet("");
      }
    }
  };

  const handleRemoveBullet = (id: string, index: number) => {
    const experience = experiences.find((exp) => exp.id === id);
    if (experience) {
      const newDescription = [...experience.description];
      newDescription.splice(index, 1);
      handleChange(id, "description", newDescription);
    }
  };

  const moveExperience = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === experiences.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    dispatch({
      type: "REORDER_EXPERIENCE",
      payload: { fromIndex: index, toIndex: newIndex },
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
        Experiencia Laboral
      </h2>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <Card key={experience.id} className="border border-gray-200">
            <CardHeader
              className="p-4 flex flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(experience.id)}
            >
              <CardTitle className="text-base">
                {experience.company || "Nueva Experiencia"}
                {experience.position && ` - ${experience.position}`}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveExperience(index, "up");
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
                    moveExperience(index, "down");
                  }}
                  disabled={index === experiences.length - 1}
                  className={
                    index === experiences.length - 1
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
                    handleRemoveExperience(experience.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === experience.id ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </CardHeader>

            {expandedId === experience.id && (
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`company-${experience.id}`}>Empresa</Label>
                    <Input
                      id={`company-${experience.id}`}
                      value={experience.company}
                      onChange={(e) =>
                        handleChange(experience.id, "company", e.target.value)
                      }
                      placeholder="Ej. Empresa Tecnológica"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`position-${experience.id}`}>Cargo</Label>
                    <Input
                      id={`position-${experience.id}`}
                      value={experience.position}
                      onChange={(e) =>
                        handleChange(experience.id, "position", e.target.value)
                      }
                      placeholder="Ej. Ingeniero de Software"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`location-${experience.id}`}>
                      Ubicación
                    </Label>
                    <Input
                      id={`location-${experience.id}`}
                      value={experience.location}
                      onChange={(e) =>
                        handleChange(experience.id, "location", e.target.value)
                      }
                      placeholder="Ej. Remoto o Ciudad, País"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${experience.id}`}>
                      Fecha de Inicio
                    </Label>
                    <Input
                      id={`startDate-${experience.id}`}
                      value={experience.startDate}
                      onChange={(e) =>
                        handleChange(experience.id, "startDate", e.target.value)
                      }
                      placeholder="Ej. Ene 2020"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor={`endDate-${experience.id}`}>
                      Fecha de Finalización
                    </Label>
                    <Input
                      id={`endDate-${experience.id}`}
                      value={experience.endDate}
                      onChange={(e) =>
                        handleChange(experience.id, "endDate", e.target.value)
                      }
                      placeholder="Ej. Dic 2022 o Presente"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Label>Descripción y Responsabilidades</Label>

                  <div className="space-y-2">
                    {experience.description.map((bullet, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="flex-1 p-2 border rounded-md bg-gray-50">
                          {bullet}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            handleRemoveBullet(experience.id, index)
                          }
                        >
                          <X className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Input
                      value={newBullet}
                      onChange={(e) => setNewBullet(e.target.value)}
                      placeholder="Añade una nueva responsabilidad o logro"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddBullet(experience.id);
                        }
                      }}
                    />
                    <Button
                      variant="outline"
                      onClick={() => handleAddBullet(experience.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button
        onClick={handleAddExperience}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <Plus className="h-4 w-4" /> Agregar Experiencia
      </Button>
    </div>
  );
}
