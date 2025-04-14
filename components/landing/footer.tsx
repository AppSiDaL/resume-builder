"use client"

import Link from "next/link"
import { FileText, Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black/80 backdrop-blur-md text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">CV Builder</span>
              </div>
              <p className="mb-4">Crea currículums profesionales que destaquen en cualquier proceso de selección.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Características
                  </Link>
                </li>
                <li>
                  <Link
                    href="#templates"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Plantillas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Guías de CV
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Ejemplos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Consejos de entrevista
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    Términos de servicio
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CV Builder. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
