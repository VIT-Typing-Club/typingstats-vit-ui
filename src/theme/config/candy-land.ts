import type { ThemeDefinition } from "@/theme/types";

const candyLandTheme: ThemeDefinition = {
  id: "candy-land",
  name: "Candy Land",
  description: "Bubblegum pinks, lollipop reds, candy blues. Pure sugar-rush energy.",
  colors: {
    base: "#ff85c8",
    mantle: "#ff6dbf",
    crust: "#ff99d2",
    surface0: "#ffaad8",
    surface1: "#ffbfe2",
    surface2: "#ffd4ec",
    overlay0: "#cc2277",
    overlay1: "#aa1155",
    overlay2: "#880033",
    text: "#3a0022",
    subtext1: "#5c0033",
    subtext0: "#7a0044",
    lavender: "#cc44ff",
    mauve: "#aa00ff",
    blue: "#0055ff",
    sapphire: "#0033cc",
    sky: "#33aaff",
    teal: "#00ddcc",
    green: "#00ee55",
    yellow: "#ffdd00",
    peach: "#ff8800",
    red: "#ff1144",
    maroon: "#cc0033",
    flamingo: "#ff44aa",
    rosewater: "#fff0f7",
  },
  borders: {
    default: "#ff44aa",
    subtle: "#ffbfe2",
    strong: "#cc0055",
    accent: "#ff1144",
  },
  shadows: {
    card: "0 12px 40px rgba(58,0,34,0.25), 0 0 0 2px rgba(255,17,68,0.20)",
    glow: "0 0 0 2px rgba(255,17,68,0.40), 0 0 24px rgba(204,68,255,0.22)",
    glowGreen: "0 0 0 2px rgba(0,238,85,0.35), 0 0 18px rgba(0,221,204,0.20)",
  },
  selection: "#ff44aa",
};

export default candyLandTheme;
