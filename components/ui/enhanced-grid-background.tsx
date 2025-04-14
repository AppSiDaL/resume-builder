"use client"

import { useEffect, useState } from "react"

interface EnhancedGridBackgroundProps {
  variant?: "default" | "red" | "purple" | "blue" | "gradient"
  fixed?: boolean
  className?: string
  withFade?: boolean
  edgeDiffusion?: boolean
}

export function EnhancedGridBackground({
  variant = "default",
  fixed = false,
  className = "",
  withFade = true,
  edgeDiffusion = true,
}: EnhancedGridBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  let gradientStyle = {}
  let edgeColor = "rgba(0, 0, 0, 1)" // Default edge color
  const positionClass = fixed ? "fixed" : "absolute"

  switch (variant) {
    case "red":
      gradientStyle = {
        background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
      }
      edgeColor = "rgba(8, 0, 0, 1)" // Darker red
      break
    case "purple":
      gradientStyle = {
        background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
      }
      edgeColor = "rgba(8, 0, 8, 1)" // Darker purple
      break
    case "blue":
      gradientStyle = {
        background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
      }
      edgeColor = "rgba(0, 0, 8, 1)" // Darker blue
      break
    case "gradient":
      gradientStyle = {
        background:
          "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)",
      }
      edgeColor = "rgba(3, 0, 3, 1)" // Darker gradient
      break
    default:
      gradientStyle = {
        background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
      }
      edgeColor = "rgba(0, 0, 0, 1)"
  }

  return (
    <div className={`${positionClass} inset-0 w-full h-full ${className}`}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 -z-9" style={gradientStyle} />

      <div
        className="absolute inset-0 -z-8"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "25px 25px",
          opacity: 0.3,
        }}
      />

      {/* Desvanecimiento en los bordes - optional */}
      {withFade && (
        <div
          className="absolute inset-0 -z-7"
          style={{
            background: "radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        />
      )}

      {/* Top & Bottom diffusion with darker colors */}
      {edgeDiffusion && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-40 -z-6"
            style={{
              background: `linear-gradient(to bottom, ${edgeColor}, rgba(0, 0, 0, 0))`,
              opacity: 0.9,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40 -z-6"
            style={{
              background: `linear-gradient(to top, ${edgeColor}, rgba(0, 0, 0, 0))`,
              opacity: 0.9,
            }}
          />
        </>
      )}
    </div>
  )
}
