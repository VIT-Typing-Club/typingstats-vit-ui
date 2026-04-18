import type { ThemeDefinition } from "@/theme/types";

const solarizedLightTheme: ThemeDefinition = {
  id: "solarized-light",
  name: "Solarized Light",
  description: "The classic warm-cream Solarized palette. Timeless and easy on the eyes.",
  colors: {
    base: "#fdf6e3",
    mantle: "#eee8d5",
    crust: "#f5efda",
    surface0: "#ede8d5",
    surface1: "#e4dfc9",
    surface2: "#d8d2bc",
    overlay0: "#93a1a1",
    overlay1: "#839496",
    overlay2: "#657b83",
    text: "#073642",
    subtext1: "#586e75",
    subtext0: "#657b83",
    lavender: "#6c71c4",
    mauve: "#d33682",
    blue: "#268bd2",
    sapphire: "#2aa198",
    sky: "#839496",
    teal: "#2aa198",
    green: "#859900",
    yellow: "#b58900",
    peach: "#cb4b16",
    red: "#dc322f",
    maroon: "#af1f1f",
    flamingo: "#d33682",
    rosewater: "#fdf0f0",
  },
  borders: {
    default: "#d4cdb8",
    subtle: "#eae4d0",
    strong: "#93a1a1",
    accent: "#268bd2",
  },
  shadows: {
    card: "0 4px 20px rgba(7,54,66,0.10), 0 0 0 1px rgba(7,54,66,0.06)",
    glow: "0 0 0 2px rgba(38,139,210,0.20), 0 4px 16px rgba(38,139,210,0.10)",
    glowGreen: "0 0 0 2px rgba(133,153,0,0.20), 0 4px 12px rgba(42,161,152,0.12)",
  },
  selection: "#d9e8f5",
};

export default solarizedLightTheme;
