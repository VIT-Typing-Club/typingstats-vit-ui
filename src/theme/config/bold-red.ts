import type { ThemeDefinition } from "@/theme/types";

const boldRedTheme: ThemeDefinition = {
  id: "bold-red",
  name: "Bold Red",
  description: "Maximum red energy. No compromises, no pastels. Just pure saturated aggression.",
  colors: {
    base: "#cc0000",
    mantle: "#bb0000",
    crust: "#dd1111",
    surface0: "#aa0000",
    surface1: "#990000",
    surface2: "#880000",
    overlay0: "#440000",
    overlay1: "#330000",
    overlay2: "#220000",
    text: "#ffffff",
    subtext1: "#ffdddd",
    subtext0: "#ffbbbb",
    lavender: "#ff88ff",
    mauve: "#ff44ff",
    blue: "#4488ff",
    sapphire: "#2266ff",
    sky: "#66aaff",
    teal: "#00ddcc",
    green: "#44ff66",
    yellow: "#ffee00",
    peach: "#ff9900",
    red: "#ff0000",
    maroon: "#770000",
    flamingo: "#ff6699",
    rosewater: "#ffeeee",
  },
  borders: {
    default: "#770000",
    subtle: "#990000",
    strong: "#ff0000",
    accent: "#ffee00",
  },
  shadows: {
    card: "0 14px 44px rgba(34,0,0,0.65), 0 0 0 2px rgba(255,0,0,0.25)",
    glow: "0 0 0 2px rgba(255,238,0,0.45), 0 0 28px rgba(255,0,0,0.30)",
    glowGreen: "0 0 0 2px rgba(68,255,102,0.35), 0 0 20px rgba(0,221,204,0.20)",
  },
  selection: "#770000",
};

export default boldRedTheme;
