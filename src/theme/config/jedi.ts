import type { ThemeDefinition } from "@/theme/types";

const jediTheme: ThemeDefinition = {
  id: "jedi",
  name: "Jedi",
  description: "The light side. Temple stone, pure blue kyber, and the calm glow of the Force.",
  colors: {
    base: "#0a0e1a",
    mantle: "#0e1422",
    crust: "#060810",
    surface0: "#141c30",
    surface1: "#1c2840",
    surface2: "#243450",
    overlay0: "#3a6aaa",
    overlay1: "#5588cc",
    overlay2: "#88aaee",
    text: "#eef4ff",
    subtext1: "#ccdaff",
    subtext0: "#aabcee",
    lavender: "#8899ff",
    mauve: "#6677dd",
    blue: "#33aaff",
    sapphire: "#0077ff",
    sky: "#66ccff",
    teal: "#00ddcc",
    green: "#44dd88",
    yellow: "#ffdd44",
    peach: "#ffaa44",
    red: "#ff4455",
    maroon: "#dd2233",
    flamingo: "#ff6688",
    rosewater: "#eeeeff",
  },
  borders: {
    default: "#1c3060",
    subtle: "#141c30",
    strong: "#3a6aaa",
    accent: "#33aaff",
  },
  shadows: {
    card: "0 14px 44px rgba(6,8,16,0.75), 0 0 0 2px rgba(51,170,255,0.14)",
    glow: "0 0 0 2px rgba(51,170,255,0.45), 0 0 32px rgba(0,119,255,0.30)",
    glowGreen: "0 0 0 2px rgba(68,221,136,0.38), 0 0 22px rgba(0,221,204,0.22)",
  },
  selection: "#1a2e55",
};

export default jediTheme;
