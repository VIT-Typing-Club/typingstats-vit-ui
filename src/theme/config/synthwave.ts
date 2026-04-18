import type { ThemeDefinition } from "@/theme/types";

const synthwaveTheme: ThemeDefinition = {
  id: "synthwave",
  name: "Synthwave",
  description: "80s retrowave palette. Hot pink grids, electric purple skies, chrome type.",
  colors: {
    base: "#0d0221",
    mantle: "#120330",
    crust: "#080118",
    surface0: "#1a0438",
    surface1: "#220550",
    surface2: "#2c0868",
    overlay0: "#6b2d9e",
    overlay1: "#9144cc",
    overlay2: "#bb77ee",
    text: "#fce8ff",
    subtext1: "#f0bbff",
    subtext0: "#d899ee",
    lavender: "#cc55ff",
    mauve: "#ff44dd",
    blue: "#44ccff",
    sapphire: "#0099ff",
    sky: "#77eeff",
    teal: "#00ffdd",
    green: "#44ff88",
    yellow: "#ffdd00",
    peach: "#ff8800",
    red: "#ff2255",
    maroon: "#cc0033",
    flamingo: "#ff55aa",
    rosewater: "#ffccee",
  },
  borders: {
    default: "#3d0d7a",
    subtle: "#1a0438",
    strong: "#cc55ff",
    accent: "#ff44dd",
  },
  shadows: {
    card: "0 16px 48px rgba(8,1,24,0.72), 0 0 0 1px rgba(204,85,255,0.18)",
    glow: "0 0 0 2px rgba(255,68,221,0.38), 0 0 28px rgba(68,204,255,0.20)",
    glowGreen: "0 0 0 2px rgba(68,255,136,0.30), 0 0 20px rgba(0,255,221,0.18)",
  },
  selection: "#2c0868",
};

export default synthwaveTheme;
