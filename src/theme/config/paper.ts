import type { ThemeDefinition } from "@/theme/types"

const paperTheme: ThemeDefinition = {
  id: "paper",
  name: "Paper",
  description:
    "Off-white parchment with sepia ink. Feels like reading a physical book.",
  colors: {
    base: "#f5f0e8",
    mantle: "#ede6d8",
    crust: "#faf7f2",
    surface0: "#e8e0ce",
    surface1: "#ddd5c2",
    surface2: "#d0c8b4",
    overlay0: "#b0a490",
    overlay1: "#8f8370",
    overlay2: "#6e6250",
    text: "#2a1f0e",
    subtext1: "#4a3820",
    subtext0: "#6a5035",
    lavender: "#7755aa",
    mauve: "#996688",
    blue: "#445588",
    sapphire: "#336677",
    sky: "#5577aa",
    teal: "#446655",
    green: "#445533",
    yellow: "#887722",
    peach: "#994422",
    red: "#882222",
    maroon: "#661111",
    flamingo: "#aa4455",
    rosewater: "#f0ddd8",
  },
  borders: {
    default: "#ccc0a8",
    subtle: "#e2d9c8",
    strong: "#8f8370",
    accent: "#445588",
  },
  shadows: {
    card: "0 4px 20px rgba(42,31,14,0.12), 0 0 0 1px rgba(42,31,14,0.06)",
    glow: "0 0 0 2px rgba(68,85,136,0.18), 0 4px 16px rgba(68,85,136,0.10)",
    glowGreen: "0 0 0 2px rgba(68,85,51,0.16), 0 4px 12px rgba(68,102,85,0.10)",
  },
  selection: "#ddd0b8",
}

export default paperTheme
