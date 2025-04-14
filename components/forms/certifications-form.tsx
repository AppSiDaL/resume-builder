"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Certification } from "@/lib/types";

interface CertificationsFormProps {
  certifications: Certification[];
  setCertifications: (certifications: Certification[]) => void;
}

export function CertificationsForm({
  certifications,
  setCertifications,
}: CertificationsFormProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAddCertification = () => {
    const newCertification = {
      id: uuidv4(),
      name: "",
      issuer: "",
      date: "",
      url: "",
      order: certifications.length,
    };
    setCertifications([...certifications, newCertification]);
    setExpandedId(newCertification.id);
  };

  const handleRemoveCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
    if (expandedId === id) {
      setExpandedId(null);
    }
  };

  const handleChange = (id: string, field: string, value: string) => {
    setCertifications(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const moveCertification = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === certifications.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const newCertifications = [...certifications];
    const [removed] = newCertifications.splice(index, 1);
    newCertifications.splice(newIndex, 0, removed);

    // Update order property
    const updatedCertifications = newCertifications.map((cert, i) => ({
      ...cert,
      order: i,
    }));
    setCertifications(updatedCertifications);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
        Certificaciones
      </h2>

      <div className="space-y-4">
        {certifications.map((certification, index) => (
          <Card key={certification.id} className="border border-gray-200">
            <CardHeader
              className="p-4 flex flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(certification.id)}
            >
              <CardTitle className="text-base">
                {certification.name || "Nueva Certificación"}
                {certification.issuer && ` - ${certification.issuer}`}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveCertification(index, "up");
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
                    moveCertification(index, "down");
                  }}
                  disabled={index === certifications.length - 1}
                  className={
                    index === certifications.length - 1
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
                    handleRemoveCertification(certification.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                {expandedId === certification.id ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </CardHeader>

            {expandedId === certification.id && (
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${certification.id}`}>
                      Nombre de la Certificación
                    </Label>
                    <Input
                      id={`name-${certification.id}`}
                      value={certification.name}
                      onChange={(e) =>
                        handleChange(certification.id, "name", e.target.value)
                      }
                      placeholder="Ej. AWS Certified Solutions Architect"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`issuer-${certification.id}`}>Emisor</Label>
                    <Input
                      id={`issuer-${certification.id}`}
                      value={certification.issuer}
                      onChange={(e) =>
                        handleChange(certification.id, "issuer", e.target.value)
                      }
                      placeholder="Ej. Amazon Web Services"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`date-${certification.id}`}>Fecha</Label>
                    <Input
                      id={`date-${certification.id}`}
                      value={certification.date}
                      onChange={(e) =>
                        handleChange(certification.id, "date", e.target.value)
                      }
                      placeholder="Ej. 2023"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`url-${certification.id}`}>
                      URL de la Certificación
                    </Label>
                    <Input
                      id={`url-${certification.id}`}
                      value={certification.url}
                      onChange={(e) =>
                        handleChange(certification.id, "url", e.target.value)
                      }
                      placeholder="Ej. https://www.credential.net/..."
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Button
        onClick={handleAddCertification}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <Plus className="h-4 w-4" /> Agregar Certificación
      </Button>
    </div>
  );
}
