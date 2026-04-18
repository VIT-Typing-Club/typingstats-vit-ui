import type { ThemeDefinition } from "@/theme/types"

const cottonCandyTheme: ThemeDefinition = {
  id: "cotton-candy",
  name: "Cotton Candy",
  description:
    "Pastel pink and mint blue swirled together. Sweet, airy, and fun.",
  colors: {
    base: "#f5e6ff",
    mantle: "#ebd6ff",
    crust: "#faf0ff",
    surface0: "#e0c8ff",
    surface1: "#ccaaff",
    surface2: "#bb88ff",
    overlay0: "#8833dd",
    overlay1: "#6611bb",
    overlay2: "#440099",
    text: "#220044",
    subtext1: "#440066",
    subtext0: "#660088",
    lavender: "#aa44ff",
    mauve: "#ff44ee",
    blue: "#44ccff",
    sapphire: "#22aaff",
    sky: "#88eeff",
    teal: "#44ffdd",
    green: "#88ffaa",
    yellow: "#ffee88",
    peach: "#ffbb66",
    red: "#ff5599",
    maroon: "#dd2266",
    flamingo: "#ff88cc",
    rosewater: "#fff5ff",
  },
  borders: {
    default: "#cc88ff",
    subtle: "#e8d4ff",
    strong: "#8833dd",
    accent: "#ff44ee",
  },
  shadows: {
    card: "0 10px 36px rgba(34,0,68,0.18), 0 0 0 1px rgba(255,68,238,0.16)",
    glow: "0 0 0 2px rgba(255,68,238,0.30), 0 0 22px rgba(170,68,255,0.18)",
    glowGreen:
      "0 0 0 2px rgba(136,255,170,0.30), 0 0 16px rgba(68,255,221,0.18)",
  },
  selection: "#ddaaff",
}

export default cottonCandyTheme
