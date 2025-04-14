import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function downloadPDF(elementId: string, filename: string) {
  // This is a placeholder for PDF generation functionality
  // In a real implementation, you would use a library like html2pdf or jsPDF
  console.log(`Downloading ${filename} from element ${elementId}`)
  alert("PDF download functionality would be implemented here")
}
