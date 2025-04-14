"use client"

import { FileText, Layout, Download, Clock, Shuffle, Palette } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"

export function FeaturesSection() {
  const features = [
    {
      icon: <Layout className="h-10 w-10 text-red-600" />,
      title: "Múltiples plantillas",
      description: "Elige entre varias plantillas profesionales diseñadas para destacar en cualquier industria.",
    },
    {
      icon: <Shuffle className="h-10 w-10 text-red-600" />,
      title: "Secciones reordenables",
      description: "Organiza las secciones de tu CV como prefieras para destacar tus puntos fuertes.",
    },
    {
      icon: <Palette className="h-10 w-10 text-red-600" />,
      title: "Personalización completa",
      description: "Ajusta colores, fuentes y estilos para crear un CV que refleje tu personalidad.",
    },
    {
      icon: <Clock className="h-10 w-10 text-red-600" />,
      title: "Rápido y sencillo",
      description: "Crea un CV profesional en minutos con nuestra interfaz intuitiva y fácil de usar.",
    },
    {
      icon: <FileText className="h-10 w-10 text-red-600" />,
      title: "Formato A4 estándar",
      description: "Tu CV se ajusta perfectamente al formato A4, ideal para impresión y envío digital.",
    },
    {
      icon: <Download className="h-10 w-10 text-red-600" />,
      title: "Exportación a PDF",
      description: "Descarga tu CV en formato PDF listo para enviar a cualquier oferta de trabajo.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-black/30 backdrop-blur-sm" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <AnimatedText text="Características" className="text-red-600 dark:text-red-500 inline-block mr-2" />
              <AnimatedText text="que marcan la diferencia" className="inline-block" delay={0.3} />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nuestra herramienta de creación de CV ofrece todo lo que necesitas para destacar en tu búsqueda de empleo.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1 * index} direction="up">
              <div className="bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
