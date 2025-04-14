"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 relative" id="hero">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-500 text-sm font-medium border border-red-100 dark:border-red-900/50">
          CV Builder — Versión 2.0
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <AnimatedText
            text="Crea un CV que impresione"
            className="block"
            delay={0.2}
          />
          <AnimatedText
            text="en minutos"
            className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text mt-2 block"
            delay={0.4}
            gradient
          />
        </h1>

        <ScrollReveal delay={0.6} direction="up">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Diseña un currículum profesional con nuestras plantillas premium.
            Destaca tu experiencia y consigue el trabajo de tus sueños.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            >
              <Link
                href="/app"
                className="inline-flex items-center justify-center text-white rounded-md text-lg font-medium transition-colors"
              >
                Crear mi CV ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 text-lg"
            >
              <Link href="#templates">Ver plantillas</Link>
            </Button>
          </div>
        </ScrollReveal>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <span className="mb-2">Descubre más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <MousePointer className="h-5 w-5 text-red-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0.3} direction="up">
            <div className="bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-red-600 dark:text-red-500 mb-2">
                +10,000
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                CVs creados
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} direction="up">
            <div className="bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-red-600 dark:text-red-500 mb-2">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Tasa de satisfacción
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7} direction="up">
            <div className="bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-red-600 dark:text-red-500 mb-2">
                +20
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Plantillas premium
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
