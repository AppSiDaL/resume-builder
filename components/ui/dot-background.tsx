"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

interface DotBackgroundProps {
  className?: string
}

export function DotBackground({ className = "" }: DotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)

      // Set canvas size in CSS
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      drawDots()
    }

    const drawDots = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set dot color based on theme
      const dotColor = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"

      // Set gradient colors based on theme
      const gradientColor1 =
        resolvedTheme === "dark"
          ? "rgba(239, 68, 68, 0.15)" // red in dark mode
          : "rgba(239, 68, 68, 0.05)" // lighter red in light mode

      const gradientColor2 =
        resolvedTheme === "dark"
          ? "rgba(168, 85, 247, 0.15)" // purple in dark mode
          : "rgba(168, 85, 247, 0.05)" // lighter purple in light mode

      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 4,
        canvas.height / 4,
        0,
        canvas.width / 4,
        canvas.height / 4,
        canvas.width / 2,
      )
      gradient.addColorStop(0, gradientColor1)
      gradient.addColorStop(1, "transparent")

      const gradient2 = ctx.createRadialGradient(
        (canvas.width * 3) / 4,
        (canvas.height * 3) / 4,
        0,
        (canvas.width * 3) / 4,
        (canvas.height * 3) / 4,
        canvas.width / 2,
      )
      gradient2.addColorStop(0, gradientColor2)
      gradient2.addColorStop(1, "transparent")

      // Draw gradients
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw dots
      ctx.fillStyle = dotColor

      const spacing = 50
      for (let x = 0; x < window.innerWidth; x += spacing) {
        for (let y = 0; y < window.innerHeight; y += spacing) {
          // Add slight randomness to dot positions for a more natural look
          const offsetX = Math.random() * 4 - 2
          const offsetY = Math.random() * 4 - 2

          ctx.beginPath()
          ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Initial setup
    resizeCanvas()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`} />
}
