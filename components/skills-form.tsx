"use client"

import type React from "react"

import { useState } from "react"
import { useResume } from "@/context/resume-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Plus } from "lucide-react"

export function SkillsForm() {
  const { state, dispatch } = useResume()
  const { skills } = state
  const [newSkill, setNewSkill] = useState("")

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      dispatch({ type: "ADD_SKILL", payload: newSkill })
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (id: string) => {
    dispatch({ type: "REMOVE_SKILL", payload: id })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Habilidades</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full">
            <span>{skill.name}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 rounded-full"
              onClick={() => handleRemoveSkill(skill.id)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Añadir nueva habilidad"
          onKeyDown={handleKeyDown}
        />
        <Button variant="outline" onClick={handleAddSkill}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
