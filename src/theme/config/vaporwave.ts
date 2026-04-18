import type { ThemeDefinition } from "@/theme/types"

const vaporwaveTheme: ThemeDefinition = {
  id: "vaporwave",
  name: "Vaporwave",
  description:
    "Lilac and teal in pastel neon. Glitchy, dreamy, Windows 95 in a mall.",
  colors: {
    base: "#1e0533",
    mantle: "#280644",
    crust: "#140322",
    surface0: "#330a55",
    surface1: "#440e6e",
    surface2: "#581488",
    overlay0: "#aa44cc",
    overlay1: "#cc66ee",
    overlay2: "#ee99ff",
    text: "#ffeeff",
    subtext1: "#ffccff",
    subtext0: "#ee99ee",
    lavender: "#dd88ff",
    mauve: "#ff44ff",
    blue: "#44ffee",
    sapphire: "#22ccdd",
    sky: "#99ffff",
    teal: "#00ffcc",
    green: "#88ff99",
    yellow: "#ffff44",
    peach: "#ffaa44",
    red: "#ff4488",
    maroon: "#cc1166",
    flamingo: "#ff88cc",
    rosewater: "#ffddff",
  },
  borders: {
    default: "#661199",
    subtle: "#440e6e",
    strong: "#cc66ee",
    accent: "#ff44ff",
  },
  shadows: {
    card: "0 14px 48px rgba(20,3,34,0.68), 0 0 0 2px rgba(255,68,255,0.18)",
    glow: "0 0 0 2px rgba(255,68,255,0.35), 0 0 26px rgba(68,255,238,0.20)",
    glowGreen:
      "0 0 0 2px rgba(136,255,153,0.28), 0 0 18px rgba(0,255,204,0.18)",
  },
  selection: "#551188",
}

export default vaporwaveTheme
