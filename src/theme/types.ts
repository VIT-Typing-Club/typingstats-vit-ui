export const themeColorTokens = [
  "base",
  "mantle",
  "crust",
  "surface0",
  "surface1",
  "surface2",
  "overlay0",
  "overlay1",
  "overlay2",
  "text",
  "subtext1",
  "subtext0",
  "lavender",
  "mauve",
  "blue",
  "sapphire",
  "sky",
  "teal",
  "green",
  "yellow",
  "peach",
  "red",
  "maroon",
  "flamingo",
  "rosewater",
] as const

export const themeBorderTokens = [
  "default",
  "subtle",
  "strong",
  "accent",
] as const

export const themeShadowTokens = ["card", "glow", "glowGreen"] as const

export type ThemeColorToken = (typeof themeColorTokens)[number]
export type ThemeBorderToken = (typeof themeBorderTokens)[number]
export type ThemeShadowToken = (typeof themeShadowTokens)[number]

export type ThemeDefinition = {
  id: string
  name: string
  description: string
  colors: Record<ThemeColorToken, string>
  borders: Record<ThemeBorderToken, string>
  shadows: Record<ThemeShadowToken, string>
  selection: string
}
