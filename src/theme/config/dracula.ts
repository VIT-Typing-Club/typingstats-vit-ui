import type { ThemeDefinition } from "@/theme/types";

const draculaTheme: ThemeDefinition = {
  id: "dracula",
  name: "Dracula",
  description: "The iconic purple-tinted dark theme. Timeless and developer-beloved.",
  colors: {
    base: "#282a36",
    mantle: "#21222c",
    crust: "#191a21",
    surface0: "#2d2f3e",
    surface1: "#343746",
    surface2: "#3e4150",
    overlay0: "#565975",
    overlay1: "#6e718f",
    overlay2: "#9294aa",
    text: "#f8f8f2",
    subtext1: "#e2e2dc",
    subtext0: "#c4c4bc",
    lavender: "#bd93f9",
    mauve: "#ff79c6",
    blue: "#8be9fd",
    sapphire: "#6ec6e8",
    sky: "#8be9fd",
    teal: "#80ffea",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    peach: "#ffb86c",
    red: "#ff5555",
    maroon: "#cc3333",
    flamingo: "#ff79c6",
    rosewater: "#ffb8d1",
  },
  borders: {
    default: "#44475a",
    subtle: "#343746",
    strong: "#6272a4",
    accent: "#bd93f9",
  },
  shadows: {
    card: "0 12px 40px rgba(25,26,33,0.7), 0 0 0 1px rgba(189,147,249,0.12)",
    glow: "0 0 0 2px rgba(189,147,249,0.30), 0 0 22px rgba(255,121,198,0.16)",
    glowGreen: "0 0 0 2px rgba(80,250,123,0.28), 0 0 18px rgba(128,255,234,0.14)",
  },
  selection: "#44475a",
};

export default draculaTheme;
