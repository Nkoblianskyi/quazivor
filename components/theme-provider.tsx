"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

// If there's a theme toggle button, disable it
const ThemeToggle = () => {
  return null // Don't render the theme toggle
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
