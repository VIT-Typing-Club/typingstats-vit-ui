import type { ThemeDefinition } from "@/theme/types"
import { config } from "@/config"

const modules = import.meta.glob("./config/*.ts", {
  eager: true,
}) as Record<string, { default?: ThemeDefinition }>

export const themes = Object.values(modules)
  .map((module) => module.default)
  .filter((theme): theme is ThemeDefinition => Boolean(theme))
  .sort((left, right) => left.name.localeCompare(right.name))

function osThemeIsDark(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

const defaultThemeId = osThemeIsDark()
  ? config.DEFAULT_DARK_THEME
  : config.DEFAULT_LIGHT_THEME
export const defaultTheme =
  themes.find((t) => t.id === defaultThemeId) ?? themes[0]
