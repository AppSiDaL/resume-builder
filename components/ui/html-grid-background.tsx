"use client"

import { useEffect, useState } from "react"

export function HtmlGridBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Grid de fondo */}
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Puntos en intersecciones */}
      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "25px 25px",
        }}
      />

      {/* Máscara de desvanecimiento */}
      <div
        className="fixed inset-0 -z-9"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 70%)",
        }}
      />

      {/* Círculos decorativos */}
      <div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full -z-8 animate-pulse"
        style={{
          background: "rgba(239, 68, 68, 0.15)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full -z-8 animate-pulse"
        style={{
          background: "rgba(168, 85, 247, 0.15)",
          filter: "blur(60px)",
          animationDelay: "2s",
        }}
      />
    </>
  )
}
