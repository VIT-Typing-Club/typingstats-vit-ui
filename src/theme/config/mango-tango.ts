import type { ThemeDefinition } from "@/theme/types"

const mangoTangoTheme: ThemeDefinition = {
  id: "mango-tango",
  name: "Mango Tango",
  description:
    "Tropical orange and yellow. Vitamin C overload, sun-bleached and vibrant.",
  colors: {
    base: "#ff8c00",
    mantle: "#f07800",
    crust: "#ff9f1a",
    surface0: "#e06600",
    surface1: "#cc5500",
    surface2: "#bb4400",
    overlay0: "#5c1a00",
    overlay1: "#441200",
    overlay2: "#2e0800",
    text: "#1a0500",
    subtext1: "#2e0a00",
    subtext0: "#441200",
    lavender: "#9900ff",
    mauve: "#ff00aa",
    blue: "#0044ff",
    sapphire: "#0022ee",
    sky: "#0099ff",
    teal: "#00cc99",
    green: "#00bb44",
    yellow: "#ffee00",
    peach: "#ff5500",
    red: "#ff0011",
    maroon: "#cc0000",
    flamingo: "#ff3377",
    rosewater: "#fff5ee",
  },
  borders: {
    default: "#993300",
    subtle: "#bb4400",
    strong: "#441200",
    accent: "#ffee00",
  },
  shadows: {
    card: "0 12px 40px rgba(26,5,0,0.45), 0 0 0 2px rgba(255,238,0,0.20)",
    glow: "0 0 0 2px rgba(255,238,0,0.40), 0 0 24px rgba(255,0,170,0.18)",
    glowGreen: "0 0 0 2px rgba(0,187,68,0.30), 0 0 18px rgba(0,204,153,0.18)",
  },
  selection: "#993300",
}

export default mangoTangoTheme
