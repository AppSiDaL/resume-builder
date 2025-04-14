export const siteConfig = {
  name: "CV Builder - Crea currículums profesionales en minutos",
  description:
    "Herramienta gratuita para crear currículums profesionales con plantillas modernas. Crea, personaliza y descarga tu CV en PDF fácilmente.",
  url: "https://cvbuilder.example.com",
  ogImage: "https://cvbuilder.example.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/cvbuilder",
    github: "https://github.com/cvbuilder",
  },
  keywords: [
    "cv online",
    "crear curriculum",
    "plantillas cv",
    "curriculum vitae",
    "generador cv",
    "cv gratis",
    "cv profesional",
    "hacer cv",
    "editor cv",
    "curriculum online",
  ],
}

export type SeoProps = {
  title?: string
  description?: string
  canonical?: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: {
      url: string
      width?: number
      height?: number
      alt?: string
    }[]
    locale?: string
    type?: string
  }
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player"
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
  }
}
