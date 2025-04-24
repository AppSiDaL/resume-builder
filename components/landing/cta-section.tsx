"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto p-12 rounded-lg bg-gray-50 dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <AnimatedText
                text="Comienza a crear tu CV"
                className="inline-block mr-2"
              />
              <AnimatedText
                text="profesional"
                className="text-red-600 dark:text-red-500 inline-block"
                delay={0.3}
              />
              <AnimatedText
                text="hoy mismo"
                className="inline-block ml-2"
                delay={0.6}
              />
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Únete a miles de profesionales que han mejorado sus oportunidades
              laborales con nuestras plantillas.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            >
              <Link
                href="/app"
                className="inline-flex items-center justify-center text-white rounded-md text-lg font-medium transition-colors"
              >
                Crear mi CV gratis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
