import type { ThemeDefinition } from "@/theme/types";

const forestTerminalTheme: ThemeDefinition = {
  id: "forest-terminal",
  name: "Forest Terminal",
  description: "Deep forest green base with moss and bark tones. Organic and focused.",
  colors: {
    base: "#0b110d",
    mantle: "#111a13",
    crust: "#060b07",
    surface0: "#172019",
    surface1: "#1e2b20",
    surface2: "#263528",
    overlay0: "#4a6b4e",
    overlay1: "#6a9470",
    overlay2: "#90bb96",
    text: "#d8edd8",
    subtext1: "#b2d4b4",
    subtext0: "#8cb88e",
    lavender: "#7c9fbf",
    mauve: "#a07cbf",
    blue: "#5c9fbf",
    sapphire: "#3d85a8",
    sky: "#7abccc",
    teal: "#3faa7a",
    green: "#5dcc5d",
    yellow: "#c8b84a",
    peach: "#c8834a",
    red: "#cc4444",
    maroon: "#994433",
    flamingo: "#c46a8a",
    rosewater: "#e8d8dc",
  },
  borders: {
    default: "#2a3d2c",
    subtle: "#172019",
    strong: "#5a8860",
    accent: "#5dcc5d",
  },
  shadows: {
    card: "0 12px 40px rgba(6,11,7,0.6), 0 0 0 1px rgba(93,204,93,0.08)",
    glow: "0 0 0 2px rgba(93,204,93,0.24), 0 0 20px rgba(63,170,122,0.14)",
    glowGreen: "0 0 0 2px rgba(93,204,93,0.3), 0 0 18px rgba(93,204,93,0.18)",
  },
  selection: "#1e3320",
};

export default forestTerminalTheme;
