export type TemplateCategory = "Minimal" | "Creative" | "Professional" | "Modern" | "Classic"

export interface TemplateInfo {
  id: string
  name: string
  category: TemplateCategory
  description: string
  thumbnail: string
  supportProfileImage: boolean
  primaryColor: string
  fontFamily: string
}

export const templates: TemplateInfo[] = [
  // Modern Templates
  {
    id: "modern",
    name: "Modern",
    category: "Modern",
    description: "A clean and modern template with a red accent color",
    thumbnail: "/templates/modern-thumbnail.png",
    supportProfileImage: false,
    primaryColor: "#dc2626",
    fontFamily: "Inter, sans-serif",
  },
  {
    id: "andrea-flores",
    name: "Andrea Flores",
    category: "Modern",
    description: "A modern template with elegant typography and clean layout",
    thumbnail: "/templates/andrea-flores-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#000000",
    fontFamily: "Playfair Display, serif",
  },
  {
    id: "ana-sanchez",
    name: "Ana Sánchez",
    category: "Modern",
    description: "A modern template with soft colors and wave patterns",
    thumbnail: "/templates/ana-sanchez-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#8B5CF6",
    fontFamily: "Montserrat, sans-serif",
  },

  // Classic Templates
  {
    id: "classic",
    name: "Classic",
    category: "Classic",
    description: "A traditional template with a blue accent color",
    thumbnail: "/templates/classic-thumbnail.png",
    supportProfileImage: false,
    primaryColor: "#2563eb",
    fontFamily: "Georgia, serif",
  },
  {
    id: "carla-rodriguez",
    name: "Carla Rodríguez",
    category: "Classic",
    description: "A classic template with a professional blue color scheme",
    thumbnail: "/templates/carla-rodriguez-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#1e40af",
    fontFamily: "Roboto, sans-serif",
  },
  {
    id: "pedro-fernandez",
    name: "Pedro Fernández",
    category: "Classic",
    description: "A classic template with a dark blue header and clean sections",
    thumbnail: "/templates/pedro-fernandez-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#0f2557",
    fontFamily: "Roboto, sans-serif",
  },

  // Minimal Templates
  {
    id: "minimal",
    name: "Minimal",
    category: "Minimal",
    description: "A minimalist template with a gray accent color",
    thumbnail: "/templates/minimal-thumbnail.png",
    supportProfileImage: false,
    primaryColor: "#4b5563",
    fontFamily: "Inter, sans-serif",
  },
  {
    id: "catalina-estevez",
    name: "Catalina Estévez",
    category: "Minimal",
    description: "A minimal template with elegant typography and subtle details",
    thumbnail: "/templates/catalina-estevez-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#6b7280",
    fontFamily: "Lato, sans-serif",
  },
  {
    id: "mateo-lopez",
    name: "Mateo López",
    category: "Minimal",
    description: "A minimal template with a clean layout and subtle blue accents",
    thumbnail: "/templates/mateo-lopez-thumbnail.png",
    supportProfileImage: false,
    primaryColor: "#3b82f6",
    fontFamily: "Roboto, sans-serif",
  },

  // Professional Templates
  {
    id: "professional",
    name: "Professional",
    category: "Professional",
    description: "A professional template with a green accent color",
    thumbnail: "/templates/professional-thumbnail.png",
    supportProfileImage: false,
    primaryColor: "#16a34a",
    fontFamily: "Arial, sans-serif",
  },
  {
    id: "daniel-gallego",
    name: "Daniel Gallego",
    category: "Professional",
    description: "A professional template with a blue header and organized sections",
    thumbnail: "/templates/daniel-gallego-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#1e3a8a",
    fontFamily: "Roboto, sans-serif",
  },
  {
    id: "juan-pablo",
    name: "Juan Pablo",
    category: "Professional",
    description: "A professional template with a navy blue color scheme",
    thumbnail: "/templates/juan-pablo-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#0f2557",
    fontFamily: "Roboto, sans-serif",
  },

  // Creative Templates
  {
    id: "claudia-alvarez",
    name: "Claudia Álvarez",
    category: "Creative",
    description: "A creative template with a pink color scheme and unique layout",
    thumbnail: "/templates/claudia-alvarez-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#ec4899",
    fontFamily: "Montserrat, sans-serif",
  },
  {
    id: "alicia-ortiz",
    name: "Alicia Ortiz",
    category: "Creative",
    description: "A creative black and white template with elegant typography",
    thumbnail: "/templates/alicia-ortiz-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#000000",
    fontFamily: "Playfair Display, serif",
  },
  {
    id: "maite-allende",
    name: "Maite Allende",
    category: "Creative",
    description: "A creative template for designers with a unique layout",
    thumbnail: "/templates/maite-allende-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#000000",
    fontFamily: "Cormorant Garamond, serif",
  },
  {
    id: "estela-dominguez",
    name: "Estela Domínguez",
    category: "Creative",
    description: "An elegant template with serif typography and clean layout",
    thumbnail: "/templates/estela-dominguez-thumbnail.png",
    supportProfileImage: true,
    primaryColor: "#4b5563",
    fontFamily: "Cormorant Garamond, serif",
  },
]

export function getTemplateById(id: string): TemplateInfo | undefined {
  return templates.find((template) => template.id === id)
}

export function getTemplatesByCategory(category: TemplateCategory): TemplateInfo[] {
  return templates.filter((template) => template.category === category)
}

export function getAllTemplateCategories(): TemplateCategory[] {
  return ["Minimal", "Creative", "Professional", "Modern", "Classic"]
}
