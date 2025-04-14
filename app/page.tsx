import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TemplatesSection } from "@/components/landing/templates-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { DotBackground } from "@/components/ui/dot-background"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <DotBackground />

      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Cargando...</div>}>
          {/* Hero Section */}
          <HeroSection />

          {/* Features Section */}
          <FeaturesSection />

          {/* Templates Section */}
          <TemplatesSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <CTASection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
