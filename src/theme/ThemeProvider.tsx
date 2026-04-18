import { useMemo, useLayoutEffect, useState, type ReactNode } from "react"
import { defaultTheme, themes } from "@/theme/themeRegistry"
import { ThemeContext, type ThemeContextValue } from "@/theme/themeContext"
import {
  themeBorderTokens,
  themeColorTokens,
  themeShadowTokens,
  type ThemeDefinition,
} from "@/theme/types"

const STORAGE_KEY = "typingstats-theme"

// hex parser with support for 3-digit and 6-digit formats, returns space-separated RGB channels for easy CSS variable usage
function hexToRgbChannels(hex: string) {
  let normalized = hex.trim().replace("#", "")

  if (normalized.length === 3) {
    normalized = normalized
      .split("")
      .map((c) => c + c)
      .join("")
  }

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    console.warn(`Invalid hex color: ${hex}`)
    return "0 0 0"
  }

  const red = parseInt(normalized.slice(0, 2), 16)
  const green = parseInt(normalized.slice(2, 4), 16)
  const blue = parseInt(normalized.slice(4, 6), 16)

  return `${red} ${green} ${blue}`
}

function applyTokens(
  root: HTMLElement,
  tokenList: readonly string[],
  values: Record<string, string>,
  prefix: string,
  shouldConvert: boolean = true,
) {
  for (const token of tokenList) {
    const value = values[token]
    if (!value) continue
    const processedValue = shouldConvert ? hexToRgbChannels(value) : value
    root.style.setProperty(`--${prefix}-${token}`, processedValue)
  }
}

// safe theme application
function applyTheme(theme: ThemeDefinition) {
  if (typeof document === "undefined") return

  const root = document.documentElement
  root.dataset.theme = theme.id

  applyTokens(root, themeColorTokens, theme.colors, "color")
  applyTokens(root, themeBorderTokens, theme.borders, "border")
  applyTokens(root, themeShadowTokens, theme.shadows, "shadow", false)

  if (theme.selection) {
    root.style.setProperty(
      "--selection-color",
      hexToRgbChannels(theme.selection),
    )
  }
}

// SSR-safe initial theme
function resolveInitialTheme(): ThemeDefinition {
  if (!defaultTheme) {
    return themes[0]
  }

  if (typeof window === "undefined") {
    return defaultTheme
  }

  try {
    const storedThemeId = localStorage.getItem(STORAGE_KEY)
    return themes.find((t) => t.id === storedThemeId) ?? defaultTheme
  } catch {
    return defaultTheme
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] =
    useState<ThemeDefinition>(resolveInitialTheme)

  const themeMap = useMemo(
    () => new Map(themes.map((theme) => [theme.id, theme])),
    [],
  )

  useLayoutEffect(() => {
    applyTheme(activeTheme)

    try {
      localStorage.setItem(STORAGE_KEY, activeTheme.id)
    } catch (error) {
      console.warn("Failed to persist theme preference:", error)
    }
  }, [activeTheme])

  const value: ThemeContextValue = {
    activeTheme,
    themes,
    setTheme: (themeId) => {
      const nextTheme = themeMap.get(themeId) ?? defaultTheme

      setActiveTheme((prev) => (prev.id === nextTheme.id ? prev : nextTheme))
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext }
