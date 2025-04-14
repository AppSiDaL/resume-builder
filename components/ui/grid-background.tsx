"use client"

import { useEffect, useRef } from "react"

interface GridBackgroundProps {
  type?: "dots" | "lines" | "grid"
  color?: string
  opacity?: number
  size?: number
  className?: string
}

export function GridBackground({
  type = "grid",
  color = "rgba(255, 255, 255, 0.3)", // Aumentado de 0.1 a 0.3
  opacity = 0.15, // Aumentado de 0.05 a 0.15
  size = 30,
  className = "",
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPattern()
    }

    const drawPattern = () => {
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.fillStyle = color
      ctx.globalAlpha = opacity

      // Crear un gradiente para desvanecer los bordes
      const createGradient = (x: number, y: number) => {
        // Distancia desde el centro
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))

        // Opacidad basada en la distancia (más cercano al centro = más opaco)
        return Math.max(0, 1 - distance / maxDistance)
      }

      if (type === "dots" || type === "grid") {
        // Dibujar puntos
        for (let x = 0; x < canvas.width; x += size) {
          for (let y = 0; y < canvas.height; y += size) {
            const opacity = createGradient(x, y)
            ctx.globalAlpha = opacity * 0.2
            ctx.beginPath()
            ctx.arc(x, y, 1, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      if (type === "lines" || type === "grid") {
        // Dibujar líneas horizontales
        for (let y = 0; y < canvas.height; y += size) {
          ctx.beginPath()
          ctx.globalAlpha = createGradient(canvas.width / 2, y) * opacity
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }

        // Dibujar líneas verticales
        for (let x = 0; x < canvas.width; x += size) {
          ctx.beginPath()
          ctx.globalAlpha = createGradient(x, canvas.height / 2) * opacity
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [color, opacity, size, type])

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`} />
}
