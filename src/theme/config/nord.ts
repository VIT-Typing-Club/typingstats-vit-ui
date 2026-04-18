import type { ThemeDefinition } from "@/theme/types"

const nordTheme: ThemeDefinition = {
  id: "nord",
  name: "Nord",
  description:
    "Arctic fjords and polar nights. Muted blue-grey with icy accents.",
  colors: {
    base: "#2e3440",
    mantle: "#272c38",
    crust: "#222730",
    surface0: "#3b4252",
    surface1: "#434c5e",
    surface2: "#4c566a",
    overlay0: "#616e88",
    overlay1: "#7b88a0",
    overlay2: "#9aa5be",
    text: "#eceff4",
    subtext1: "#e5e9f0",
    subtext0: "#d8dee9",
    lavender: "#b48ead",
    mauve: "#a0799c",
    blue: "#81a1c1",
    sapphire: "#5e81ac",
    sky: "#88c0d0",
    teal: "#8fbcbb",
    green: "#a3be8c",
    yellow: "#ebcb8b",
    peach: "#d08770",
    red: "#bf616a",
    maroon: "#994f55",
    flamingo: "#c9788a",
    rosewater: "#f0e6ea",
  },
  borders: {
    default: "#434c5e",
    subtle: "#3b4252",
    strong: "#7b88a0",
    accent: "#88c0d0",
  },
  shadows: {
    card: "0 10px 36px rgba(34,39,48,0.65), 0 0 0 1px rgba(136,192,208,0.10)",
    glow: "0 0 0 2px rgba(136,192,208,0.26), 0 0 20px rgba(129,161,193,0.14)",
    glowGreen:
      "0 0 0 2px rgba(163,190,140,0.24), 0 0 16px rgba(143,188,187,0.12)",
  },
  selection: "#434c5e",
}

export default nordTheme
