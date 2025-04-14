import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Puedo usar el servicio de forma gratuita?",
      answer:
        "Sí, ofrecemos un plan gratuito con funcionalidades básicas que te permitirán crear un CV profesional. Para acceder a todas las plantillas y funciones avanzadas, te recomendamos nuestro plan Premium.",
    },
    {
      question: "¿Cómo puedo descargar mi CV?",
      answer:
        "Una vez hayas completado tu CV, simplemente haz clic en el botón 'Descargar PDF' que encontrarás en la parte inferior de la página. Tu CV se descargará en formato PDF listo para imprimir o enviar.",
    },
    {
      question: "¿Puedo crear múltiples versiones de mi CV?",
      answer:
        "Con nuestro plan Premium, puedes crear y guardar múltiples versiones de tu CV adaptadas a diferentes puestos o industrias. Esto te permite personalizar tu candidatura para cada oferta de trabajo.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Absolutamente. La seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de nivel bancario y nunca compartimos tu información con terceros sin tu consentimiento explícito.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, puedes cancelar tu suscripción Premium en cualquier momento desde tu panel de usuario. No hay compromisos a largo plazo ni cargos ocultos.",
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer:
        "Sí, todos nuestros planes incluyen soporte técnico. Los usuarios Premium disfrutan de soporte prioritario con tiempos de respuesta más rápidos.",
    },
  ]

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro servicio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
