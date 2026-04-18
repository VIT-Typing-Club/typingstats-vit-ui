import type { ThemeDefinition } from "@/theme/types"

const modules = import.meta.glob("./config/*.ts", {
  eager: true,
}) as Record<string, { default?: ThemeDefinition }>

export const themes = Object.values(modules)
  .map((module) => module.default)
  .filter((theme): theme is ThemeDefinition => Boolean(theme))
  .sort((left, right) => left.name.localeCompare(right.name))

export const defaultTheme =
  themes.find((theme) => theme.id === "terminal-dark") ?? themes[0]
