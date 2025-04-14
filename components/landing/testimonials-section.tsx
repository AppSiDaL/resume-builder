"use client";

import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María García",
      role: "Diseñadora UX/UI",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Gracias a esta herramienta conseguí mi trabajo soñado. La plantilla profesional destacó mi experiencia de una forma que nunca había logrado antes.",
      stars: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Desarrollador Full Stack",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Increíblemente fácil de usar. En menos de 30 minutos tenía un CV que realmente reflejaba mis habilidades y experiencia. ¡Muy recomendable!",
      stars: 5,
    },
    {
      name: "Laura Martínez",
      role: "Marketing Digital",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "La capacidad de reordenar las secciones me permitió personalizar mi CV para diferentes ofertas. La función de exportación a PDF es perfecta.",
      stars: 4,
    },
  ];

  return (
    <section
      className="py-20 bg-gray-50 dark:bg-black/30 backdrop-blur-sm"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <AnimatedText text="Lo que" className="inline-block mr-2" />
              <AnimatedText
                text="dicen nuestros usuarios"
                className="text-red-600 dark:text-red-500 inline-block"
                delay={0.3}
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Miles de profesionales han conseguido empleo gracias a nuestras
              plantillas de CV.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.2 * index} direction="up">
              <div className="bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.stars
                          ? "text-red-600 dark:text-red-500 fill-red-600 dark:fill-red-500"
                          : "text-gray-300 dark:text-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
