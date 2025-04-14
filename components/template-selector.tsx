"use client";

import { useState } from "react";
import Image from "next/image";
import {
  getAllTemplateCategories,
  getTemplatesByCategory,
  type TemplateCategory,
} from "@/lib/template-registry";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TemplateSelectorProps {
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
}

export function TemplateSelector({
  selectedTemplateId,
  onSelectTemplate,
}: TemplateSelectorProps) {
  const [activeCategory, setActiveCategory] =
    useState<TemplateCategory>("Modern");
  const categories = getAllTemplateCategories();

  return (
    <div className="w-full">
      <Tabs
        defaultValue={activeCategory}
        onValueChange={(value) => setActiveCategory(value as TemplateCategory)}
      >
        <TabsList className="grid grid-cols-5 mb-6">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-xs sm:text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {getTemplatesByCategory(category).map((template) => (
                <div
                  key={template.id}
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedTemplateId === template.id
                      ? `border-2 border-red-600 shadow-md`
                      : `border-gray-200 hover:border-gray-300 hover:shadow`
                  }`}
                  onClick={() => onSelectTemplate(template.id)}
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={
                        template.thumbnail ||
                        `/placeholder.svg?height=300&width=225&text=${template.name}`
                      }
                      alt={template.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-xs text-gray-500">
                      {template.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
