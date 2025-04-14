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
import { Project } from "@/lib/types";

interface ProjectsFormProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export function ProjectsForm({ projects, setProjects }: ProjectsFormProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAddProject = () => {
    const newProject = {
      id: uuidv4(),
      name: "",
      description: "",
      url: "",
      startDate: "",
      endDate: "",
      order: projects.length,
    };
    setProjects([...projects, newProject]);
    setExpandedId(newProject.id);
  };

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    if (expandedId === id) {
      setExpandedId(null);
    }
  };

  const handleChange = (id: string, field: string, value: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const moveProject = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === projects.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const newProjects = [...projects];
    const [removed] = newProjects.splice(index, 1);
    newProjects.splice(newIndex, 0, removed);

    // Update order property
    const updatedProjects = newProjects.map((project, i) => ({
      ...project,
      order: i,
    }));
    setProjects(updatedProjects);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
        Proyectos
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card key={project.id} className="border border-gray-200">
            <CardHeader
              className="p-4 flex flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(project.id)}
            >
              <CardTitle className="text-base">
                {project.name || "Nuevo Proyecto"}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveProject(index, "up");
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
                    moveProject(index, "down");
                  }}
                  disabled={index === projects.length - 1}
                  className={
                    index === projects.length - 1
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
                    handleRemoveProject(project.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === project.id ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </CardHeader>

            {expandedId === project.id && (
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${project.id}`}>
                      Nombre del Proyecto
                    </Label>
                    <Input
                      id={`name-${project.id}`}
                      value={project.name}
                      onChange={(e) =>
                        handleChange(project.id, "name", e.target.value)
                      }
                      placeholder="Ej. Sistema de Gestión de Inventario"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`url-${project.id}`}>
                      URL del Proyecto
                    </Label>
                    <Input
                      id={`url-${project.id}`}
                      value={project.url}
                      onChange={(e) =>
                        handleChange(project.id, "url", e.target.value)
                      }
                      placeholder="Ej. https://github.com/usuario/proyecto"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${project.id}`}>
                      Fecha de Inicio
                    </Label>
                    <Input
                      id={`startDate-${project.id}`}
                      value={project.startDate}
                      onChange={(e) =>
                        handleChange(project.id, "startDate", e.target.value)
                      }
                      placeholder="Ej. Ene 2022"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${project.id}`}>
                      Fecha de Finalización
                    </Label>
                    <Input
                      id={`endDate-${project.id}`}
                      value={project.endDate}
                      onChange={(e) =>
                        handleChange(project.id, "endDate", e.target.value)
                      }
                      placeholder="Ej. Jun 2022 o En curso"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label htmlFor={`description-${project.id}`}>
                    Descripción
                  </Label>
                  <Textarea
                    id={`description-${project.id}`}
                    value={project.description}
                    onChange={(e) =>
                      handleChange(project.id, "description", e.target.value)
                    }
                    placeholder="Describe el proyecto, tecnologías utilizadas, tu rol, etc."
                    rows={3}
                  />
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button
        onClick={handleAddProject}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <Plus className="h-4 w-4" /> Agregar Proyecto
      </Button>
    </div>
  );
}
