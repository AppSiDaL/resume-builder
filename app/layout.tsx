import type React from "react";
import "@/app/globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "CV Builder - Crea currículums profesionales en minutos",
  description:
    "Diseña un currículum profesional con nuestras plantillas premium. Destaca tu experiencia y consigue el trabajo de tus sueños.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <NextAuthProvider>
          <ThemeProvider defaultTheme="system">
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Cargando...
                </div>
              }
            >
              {children}
            </Suspense>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import NextAuthProvider from "@/components/next-auth-provider";
