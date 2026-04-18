import type { ThemeDefinition } from "@/theme/types"

const bubblegumPopTheme: ThemeDefinition = {
  id: "bubblegum-pop",
  name: "Bubblegum Pop",
  description:
    "Bright mint green base with hot pink and electric yellow pops. Y2K energy.",
  colors: {
    base: "#00cc88",
    mantle: "#00bb77",
    crust: "#00dd99",
    surface0: "#00aa66",
    surface1: "#009955",
    surface2: "#008844",
    overlay0: "#005533",
    overlay1: "#004422",
    overlay2: "#003311",
    text: "#001a0d",
    subtext1: "#002211",
    subtext0: "#003318",
    lavender: "#cc00ff",
    mauve: "#ff00cc",
    blue: "#0044ff",
    sapphire: "#0022ee",
    sky: "#44aaff",
    teal: "#00ffee",
    green: "#aaff00",
    yellow: "#ffee00",
    peach: "#ff8800",
    red: "#ff0044",
    maroon: "#cc0033",
    flamingo: "#ff44aa",
    rosewater: "#ffeecc",
  },
  borders: {
    default: "#007744",
    subtle: "#009955",
    strong: "#004422",
    accent: "#ff00cc",
  },
  shadows: {
    card: "0 12px 40px rgba(0,26,13,0.40), 0 0 0 2px rgba(255,0,204,0.18)",
    glow: "0 0 0 2px rgba(255,0,204,0.38), 0 0 24px rgba(204,0,255,0.20)",
    glowGreen: "0 0 0 2px rgba(170,255,0,0.35), 0 0 18px rgba(0,255,238,0.20)",
  },
  selection: "#008844",
}

export default bubblegumPopTheme
