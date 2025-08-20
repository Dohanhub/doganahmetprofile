import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="h-10 w-10 px-0 bg-white dark:bg-gray-800 border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}