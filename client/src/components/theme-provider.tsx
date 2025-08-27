import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "dogan-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Theme
      if (stored === "dark" || stored === "light") {
        return stored
      }
    }
    return defaultTheme
  })

  // Force initial theme application
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    root.style.colorScheme = theme
    console.log('Initial theme applied:', theme)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove existing theme classes
    root.classList.remove("light", "dark")
    
    // Apply the theme immediately
    root.classList.add(theme)
    
    // Set color scheme for browsers
    document.documentElement.style.colorScheme = theme
    
    // Force a repaint to ensure theme is applied
    root.style.display = 'none'
    root.offsetHeight // Trigger reflow
    root.style.display = ''
    
    // Debug logging
    console.log('Theme changed to:', theme)
    console.log('Root classes:', root.classList.toString())
    console.log('Color scheme:', document.documentElement.style.colorScheme)
  }, [theme])

  // Initialize theme on mount
  useEffect(() => {
    console.log('ThemeProvider mounted with theme:', theme)
    console.log('Initial root classes:', window.document.documentElement.classList.toString())
  }, [])

  const value = {
    theme,
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

  if (context === undefined) {
    console.warn("useTheme must be used within a ThemeProvider")
    return { theme: "light", setTheme: () => {} }
  }

  return context
}