import { createContext } from "react"
import type { ThemeDefinition } from "@/theme/types"

export type ThemeContextValue = {
  activeTheme: ThemeDefinition
  themes: ThemeDefinition[]
  setTheme: (themeId: string) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
