import type { ThemeDefinition } from "@/theme/types"

const neonSpectrumTheme: ThemeDefinition = {
  id: "neon-spectrum",
  name: "Neon Spectrum",
  description:
    "A maximal neon theme with electric gradients, glowing surfaces, and arcade-level color energy.",
  colors: {
    base: "#090611",
    mantle: "#110a1e",
    crust: "#05030a",
    surface0: "#1a1130",
    surface1: "#241645",
    surface2: "#32205d",
    overlay0: "#7262a8",
    overlay1: "#9a87d8",
    overlay2: "#ccb8ff",
    text: "#f6f0ff",
    subtext1: "#d9cbff",
    subtext0: "#b8a6ea",
    lavender: "#cc44ff",
    mauve: "#ff00cc",
    blue: "#00cfff",
    sapphire: "#0099ff",
    sky: "#44eeff",
    teal: "#00ffcc",
    green: "#39ff14",
    yellow: "#ffee00",
    peach: "#ff7722",
    red: "#ff0055",
    maroon: "#cc0033",
    flamingo: "#ff55cc",
    rosewater: "#ffddff",
  },
  borders: {
    default: "#3f2d72",
    subtle: "#25153f",
    strong: "#8a65ff",
    accent: "#ff4fd8",
  },
  shadows: {
    card: "0 18px 48px rgba(5, 3, 10, 0.62), 0 0 0 1px rgba(168, 85, 247, 0.16)",
    glow: "0 0 0 2px rgba(255, 79, 216, 0.34), 0 0 24px rgba(54, 209, 255, 0.18)",
    glowGreen:
      "0 0 0 2px rgba(125, 255, 122, 0.3), 0 0 18px rgba(56, 255, 214, 0.16)",
  },
  selection: "#32205d",
}

export default neonSpectrumTheme
