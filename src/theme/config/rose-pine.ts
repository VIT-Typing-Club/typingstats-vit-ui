import type { ThemeDefinition } from "@/theme/types"

const rosePineTheme: ThemeDefinition = {
  id: "rose-pine",
  name: "Rosé Pine",
  description:
    "Warm dusty rose base with muted jewel tones. Cozy and literary.",
  colors: {
    base: "#191724",
    mantle: "#1f1d2e",
    crust: "#111019",
    surface0: "#26233a",
    surface1: "#2a273f",
    surface2: "#312e4a",
    overlay0: "#6e6a86",
    overlay1: "#908caa",
    overlay2: "#c4a7b0",
    text: "#e0def4",
    subtext1: "#c4bed8",
    subtext0: "#a49bbf",
    lavender: "#c4a7e7",
    mauve: "#c4a7e7",
    blue: "#9ccfd8",
    sapphire: "#31748f",
    sky: "#9ccfd8",
    teal: "#31748f",
    green: "#9ad887",
    yellow: "#f6c177",
    peach: "#f6c177",
    red: "#eb6f92",
    maroon: "#b4637a",
    flamingo: "#ea9a97",
    rosewater: "#faf4ed",
  },
  borders: {
    default: "#403d52",
    subtle: "#2a273f",
    strong: "#908caa",
    accent: "#eb6f92",
  },
  shadows: {
    card: "0 12px 36px rgba(17,16,25,0.55), 0 0 0 1px rgba(196,167,231,0.08)",
    glow: "0 0 0 2px rgba(235,111,146,0.28), 0 0 20px rgba(156,207,216,0.14)",
    glowGreen:
      "0 0 0 2px rgba(154,216,135,0.25), 0 0 16px rgba(49,116,143,0.14)",
  },
  selection: "#312e4a",
}

export default rosePineTheme
