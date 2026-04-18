import type { ThemeDefinition } from "@/theme/types";

const highContrastTheme: ThemeDefinition = {
  id: "high-contrast",
  name: "High Contrast",
  description: "Maximum legibility. Pure black and white with saturated WCAG-passing accents.",
  colors: {
    base: "#000000",
    mantle: "#0a0a0a",
    crust: "#000000",
    surface0: "#111111",
    surface1: "#1a1a1a",
    surface2: "#222222",
    overlay0: "#555555",
    overlay1: "#777777",
    overlay2: "#999999",
    text: "#ffffff",
    subtext1: "#eeeeee",
    subtext0: "#cccccc",
    lavender: "#cc88ff",
    mauve: "#ff55ee",
    blue: "#55aaff",
    sapphire: "#2288ff",
    sky: "#55ddff",
    teal: "#00ffcc",
    green: "#55ff55",
    yellow: "#ffee00",
    peach: "#ff9900",
    red: "#ff3333",
    maroon: "#ff0000",
    flamingo: "#ff55aa",
    rosewater: "#ffddee",
  },
  borders: {
    default: "#333333",
    subtle: "#1a1a1a",
    strong: "#aaaaaa",
    accent: "#ffffff",
  },
  shadows: {
    card: "0 0 0 1px #ffffff, 0 8px 24px rgba(0,0,0,0.8)",
    glow: "0 0 0 2px #ffffff, 0 0 16px rgba(255,255,255,0.25)",
    glowGreen: "0 0 0 2px #55ff55, 0 0 16px rgba(85,255,85,0.30)",
  },
  selection: "#333333",
};

export default highContrastTheme;
