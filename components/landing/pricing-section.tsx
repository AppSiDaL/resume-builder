import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      description: "Perfecto para comenzar",
      features: ["1 plantilla de CV", "Exportación a PDF", "Almacenamiento limitado", "Soporte por email"],
      cta: "Comenzar gratis",
      popular: false,
    },
    {
      name: "Premium",
      price: "9,99€",
      period: "mes",
      description: "Para profesionales exigentes",
      features: [
        "Todas las plantillas",
        "Exportación a PDF y Word",
        "Almacenamiento ilimitado",
        "Soporte prioritario",
        "Sin marca de agua",
        "Múltiples versiones de CV",
      ],
      cta: "Probar gratis 7 días",
      popular: true,
    },
    {
      name: "Empresas",
      price: "Contactar",
      description: "Para equipos y empresas",
      features: [
        "Todas las características Premium",
        "Plantillas personalizadas",
        "Integración con ATS",
        "Análisis de CV",
        "Soporte dedicado",
        "Facturación empresarial",
      ],
      cta: "Contactar ventas",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes simples y transparentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? "border-2 border-red-600 relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white text-xs font-semibold py-1 px-3 absolute top-0 right-0 rounded-bl-lg">
                  Más popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">/{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-900 hover:bg-black text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="bg-gray-50 p-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
