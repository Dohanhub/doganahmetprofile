import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  actualTheme: "dark" | "light"
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  actualTheme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Theme
      return stored || defaultTheme
    }
    return defaultTheme
  })

  const [actualTheme, setActualTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Theme
      if (stored === "dark" || stored === "light") return stored
      if (stored === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      }
    }
    return "light"
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove existing theme classes
    root.classList.remove("light", "dark")
    
    let resolvedTheme: "dark" | "light"
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark" 
        : "light"
      resolvedTheme = systemTheme
    } else {
      resolvedTheme = theme
    }
    
    // Apply the theme immediately
    root.classList.add(resolvedTheme)
    setActualTheme(resolvedTheme)
    
    // Store resolved theme for SSR consistency
    if (typeof window !== "undefined") {
      document.documentElement.style.colorScheme = resolvedTheme
    }
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        const newSystemTheme = mediaQuery.matches ? "dark" : "light"
        root.classList.remove("light", "dark")
        root.classList.add(newSystemTheme)
        setActualTheme(newSystemTheme)
        document.documentElement.style.colorScheme = newSystemTheme
      }
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const value = {
    theme,
    actualTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}