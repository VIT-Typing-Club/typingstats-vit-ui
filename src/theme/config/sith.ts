import type { ThemeDefinition } from "@/theme/types"

const sithTheme: ThemeDefinition = {
  id: "sith",
  name: "Sith",
  description:
    "The dark side. Obsidian black, blood red, and corrupted lightning. Power at any cost.",
  colors: {
    base: "#080008",
    mantle: "#0e000e",
    crust: "#040004",
    surface0: "#160016",
    surface1: "#200020",
    surface2: "#2c002c",
    overlay0: "#880022",
    overlay1: "#bb0033",
    overlay2: "#dd2244",
    text: "#ffe8e8",
    subtext1: "#ffbbbb",
    subtext0: "#ee8888",
    lavender: "#cc00ff",
    mauve: "#aa00dd",
    blue: "#5500ff",
    sapphire: "#3300cc",
    sky: "#8833ff",
    teal: "#660088",
    green: "#884400",
    yellow: "#ff8800",
    peach: "#ff4400",
    red: "#ff0000",
    maroon: "#cc0000",
    flamingo: "#ff0044",
    rosewater: "#ffdddd",
  },
  borders: {
    default: "#440011",
    subtle: "#200020",
    strong: "#cc0000",
    accent: "#ff0000",
  },
  shadows: {
    card: "0 16px 48px rgba(4,0,4,0.80), 0 0 0 2px rgba(255,0,0,0.18)",
    glow: "0 0 0 2px rgba(255,0,0,0.50), 0 0 32px rgba(204,0,0,0.35)",
    glowGreen: "0 0 0 2px rgba(204,0,255,0.40), 0 0 24px rgba(136,0,204,0.28)",
  },
  selection: "#330000",
}

export default sithTheme
