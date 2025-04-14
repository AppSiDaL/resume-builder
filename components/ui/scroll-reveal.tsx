"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { type ReactNode, useEffect, useState } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  threshold?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [mounted, setMounted] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a static version for SSR
    return <div className={className}>{children}</div>
  }

  // Set the initial animation properties based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance }
      case "down":
        return { opacity: 0, y: -distance }
      case "left":
        return { opacity: 0, x: distance }
      case "right":
        return { opacity: 0, x: -distance }
      default:
        return { opacity: 0, y: distance }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialProps()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitialProps()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
