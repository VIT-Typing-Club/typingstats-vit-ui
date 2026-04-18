import type { ThemeDefinition } from "@/theme/types"

const tokyoNightTheme: ThemeDefinition = {
  id: "tokyo-night",
  name: "Tokyo Night",
  description:
    "Rainy Tokyo streets at midnight. Deep navy with neon-soaked accents.",
  colors: {
    base: "#1a1b26",
    mantle: "#13141f",
    crust: "#0d0e17",
    surface0: "#20212e",
    surface1: "#282a3a",
    surface2: "#32344a",
    overlay0: "#444868",
    overlay1: "#565f89",
    overlay2: "#737aa2",
    text: "#c0caf5",
    subtext1: "#a9b1d6",
    subtext0: "#9aa5ce",
    lavender: "#bb9af7",
    mauve: "#9d7cd8",
    blue: "#7aa2f7",
    sapphire: "#2ac3de",
    sky: "#7dcfff",
    teal: "#1abc9c",
    green: "#9ece6a",
    yellow: "#e0af68",
    peach: "#ff9e64",
    red: "#f7768e",
    maroon: "#db4b4b",
    flamingo: "#ff757f",
    rosewater: "#ffc7ca",
  },
  borders: {
    default: "#32344a",
    subtle: "#20212e",
    strong: "#565f89",
    accent: "#7aa2f7",
  },
  shadows: {
    card: "0 12px 40px rgba(13,14,23,0.70), 0 0 0 1px rgba(122,162,247,0.10)",
    glow: "0 0 0 2px rgba(122,162,247,0.28), 0 0 22px rgba(187,154,247,0.14)",
    glowGreen:
      "0 0 0 2px rgba(158,206,106,0.26), 0 0 18px rgba(26,188,156,0.12)",
  },
  selection: "#2d3149",
}

export default tokyoNightTheme
