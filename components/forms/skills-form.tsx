"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Skill } from "@/lib/types";

interface SkillsFormProps {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, setSkills }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState(75);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const skill = {
        id: uuidv4(),
        name: newSkill,
        level: newSkillLevel,
      };
      setSkills([...skills, skill]);
      setNewSkill("");
      setNewSkillLevel(75);
    }
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleSkillLevelChange = (id: string, level: number) => {
    setSkills(
      skills.map((skill) => (skill.id === id ? { ...skill, level } : skill))
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
        Habilidades
      </h2>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{skill.level}%</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleRemoveSkill(skill.id)}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) =>
                  handleSkillLevelChange(
                    skill.id,
                    Number.parseInt(e.target.value)
                  )
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="newSkill">Añadir nueva habilidad</Label>
          <div className="flex items-center gap-2">
            <Input
              id="newSkill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Ej. JavaScript, Diseño UX, Gestión de proyectos"
              onKeyDown={handleKeyDown}
            />
            <Button variant="outline" onClick={handleAddSkill}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="newSkillLevel">Nivel de habilidad</Label>
            <span className="text-sm text-gray-500">{newSkillLevel}%</span>
          </div>
          <input
            id="newSkillLevel"
            type="range"
            min="0"
            max="100"
            value={newSkillLevel}
            onChange={(e) => setNewSkillLevel(Number.parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Principiante</span>
            <span>Intermedio</span>
            <span>Avanzado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
