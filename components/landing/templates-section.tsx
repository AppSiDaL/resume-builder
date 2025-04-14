"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import Image from "next/image";
import Link from "next/link";

export function TemplatesSection() {
  const [activeTemplate, setActiveTemplate] = useState(0);

  const templates = [
    { id: "modern", name: "Moderno", color: "#dc2626" },
    { id: "classic", name: "Clásico", color: "#2563eb" },
    { id: "minimal", name: "Minimalista", color: "#4b5563" },
    { id: "professional", name: "Profesional", color: "#16a34a" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black/20" id="templates">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <AnimatedText text="Plantillas" className="inline-block mr-2" />
              <AnimatedText
                text="profesionales"
                className="text-red-600 dark:text-red-500 inline-block"
                delay={0.3}
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Elige entre nuestras plantillas diseñadas por profesionales para
              destacar en cualquier proceso de selección.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal className="lg:w-1/2" delay={0.3}>
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 dark:bg-gray-900/70 rounded-full p-1">
                {templates.map((template, index) => (
                  <button
                    key={template.id}
                    onClick={() => setActiveTemplate(index)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTemplate === index
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                  >
                    {activeTemplate === index && (
                      <motion.div
                        layoutId="activeTemplateIndicator"
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: template.color }}
                        initial={false}
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: template.color }}
                      ></span>
                      {template.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTemplate}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  <div className="relative max-w-md w-full">
                    <div
                      className="aspect-[1/1.414] rounded-lg shadow-md overflow-hidden border-2"
                      style={{
                        borderColor: templates[activeTemplate].color,
                        backgroundColor: "white",
                      }}
                    >
                      <Image
                        width={600}
                        height={800}
                        src={`/placeholder.svg?height=800&width=600&text=${templates[activeTemplate].name}`}
                        alt={`Plantilla ${templates[activeTemplate].name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:w-1/2" delay={0.5} direction="left">
            <div className="bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                Diseñadas para{" "}
                <span className="text-red-600 dark:text-red-500">
                  impresionar
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nuestras plantillas han sido cuidadosamente diseñadas para
                destacar tu experiencia y habilidades de la manera más efectiva
                posible. Cada detalle está pensado para maximizar tus
                oportunidades de éxito.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Diseño profesional y moderno
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Optimizadas para sistemas ATS
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Estructura clara y legible
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Personalización completa
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white w-full"
              >
                <Link href="/app">Probar esta plantilla</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
