import type { ThemeDefinition } from "@/theme/types"

const professionalRedTheme: ThemeDefinition = {
  id: "professional-red",
  name: "Professional Red",
  description:
    "A refined editorial theme with oxblood accents, warm neutrals, and serif-forward typography.",
  colors: {
    base: "#f6f1eb",
    mantle: "#efe6dd",
    crust: "#e4d7ca",
    surface0: "#f1e8df",
    surface1: "#e6d8ca",
    surface2: "#d4c1b0",
    overlay0: "#9f8d80",
    overlay1: "#7d6a60",
    overlay2: "#5f4d45",
    text: "#2f2522",
    subtext1: "#4a3c37",
    subtext0: "#67534b",
    lavender: "#8f2333",
    mauve: "#7a1f2d",
    blue: "#465f7a",
    sapphire: "#5c6f7a",
    sky: "#6f8893",
    teal: "#5f7a72",
    green: "#5d7658",
    yellow: "#aa7a2d",
    peach: "#b66a43",
    red: "#9e2f3f",
    maroon: "#6e1f29",
    flamingo: "#c98d8b",
    rosewater: "#fbf4ee",
  },
  borders: {
    default: "#c9b4a3",
    subtle: "#ddd0c3",
    strong: "#ab8f7c",
    accent: "#8f2333",
  },
  shadows: {
    card: "0 10px 24px rgba(70, 43, 35, 0.08), 0 0 0 1px rgba(143, 35, 51, 0.08)",
    glow: "0 0 0 2px rgba(143, 35, 51, 0.18)",
    glowGreen: "0 0 0 2px rgba(93, 118, 88, 0.18)",
  },
  selection: "#e7c9c6",
}

export default professionalRedTheme
