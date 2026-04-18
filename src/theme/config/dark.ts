import type { ThemeDefinition } from "@/theme/types"

const darkTheme: ThemeDefinition = {
  id: "terminal-dark",
  name: "Terminal Dark",
  description:
    "The original dark terminal palette with deep navy surfaces and neon-leaning accents.",
  colors: {
    base: "#1e2030",
    mantle: "#181926",
    crust: "#0f1016",
    surface0: "#1e2030",
    surface1: "#252840",
    surface2: "#2e3252",
    overlay0: "#6e738d",
    overlay1: "#8087a2",
    overlay2: "#939ab7",
    text: "#cad3f5",
    subtext1: "#b8c0e0",
    subtext0: "#a5adcb",
    lavender: "#b7bdf8",
    mauve: "#c6a0f6",
    blue: "#8aadf4",
    sapphire: "#7dc4e4",
    sky: "#91d7e3",
    teal: "#8bd5ca",
    green: "#a6da95",
    yellow: "#eed49f",
    peach: "#f5a97f",
    red: "#ed8796",
    maroon: "#ee99a0",
    flamingo: "#f0c6c6",
    rosewater: "#f4dbd6",
  },
  borders: {
    default: "#363a4f",
    subtle: "#24273a",
    strong: "#494d64",
    accent: "#b7bdf8",
  },
  shadows: {
    card: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(110, 115, 141, 0.15)",
    glow: "0 0 0 2px rgba(183, 189, 248, 0.35)",
    glowGreen: "0 0 0 2px rgba(166, 218, 149, 0.35)",
  },
  selection: "#2e3252",
}

export default darkTheme
