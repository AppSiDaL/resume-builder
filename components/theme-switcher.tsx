"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`${theme === "light" ? "bg-gray-200 dark:bg-gray-700" : ""} rounded-full`}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`${theme === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""} rounded-full`}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className={`${theme === "system" ? "bg-gray-200 dark:bg-gray-700" : ""} rounded-full`}
        aria-label="System theme"
      >
        <Monitor className="h-5 w-5" />
      </Button>
    </div>
  )
}
