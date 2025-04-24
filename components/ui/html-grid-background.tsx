"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

export function HtmlGridBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const gridColor =
    resolvedTheme === "dark"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.1)";

  const dotsColor =
    resolvedTheme === "dark"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.3)";

  const gradientOverlay =
    resolvedTheme === "dark"
      ? "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 70%)"
      : "radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.8) 70%)";

  return (
    <>

      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotsColor} 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          backgroundPosition: "25px 25px",
        }}
      />

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
  );
}
