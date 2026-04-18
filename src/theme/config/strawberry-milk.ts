import type { ThemeDefinition } from "@/theme/types";

const strawberryMilkTheme: ThemeDefinition = {
  id: "strawberry-milk",
  name: "Strawberry Milk",
  description: "Warm blush whites and deep strawberry reds. Rich, creamy, sweet.",
  colors: {
    base: "#fff0f3",
    mantle: "#ffe4e9",
    crust: "#fff8fa",
    surface0: "#ffd6dd",
    surface1: "#ffc2cc",
    surface2: "#ffaab8",
    overlay0: "#ee4466",
    overlay1: "#cc2244",
    overlay2: "#aa0022",
    text: "#2a0008",
    subtext1: "#440011",
    subtext0: "#660022",
    lavender: "#9944dd",
    mauve: "#cc22aa",
    blue: "#4455ff",
    sapphire: "#2233ee",
    sky: "#5599ff",
    teal: "#22bbaa",
    green: "#33bb55",
    yellow: "#ffbb00",
    peach: "#ff7744",
    red: "#ff1133",
    maroon: "#cc0022",
    flamingo: "#ff5588",
    rosewater: "#fff5f7",
  },
  borders: {
    default: "#ffa0b4",
    subtle: "#ffd0da",
    strong: "#cc2244",
    accent: "#ff1133",
  },
  shadows: {
    card: "0 8px 32px rgba(42,0,8,0.14), 0 0 0 1px rgba(255,17,51,0.12)",
    glow: "0 0 0 2px rgba(255,17,51,0.28), 0 0 20px rgba(204,34,170,0.16)",
    glowGreen: "0 0 0 2px rgba(51,187,85,0.24), 0 0 14px rgba(34,187,170,0.14)",
  },
  selection: "#ffccd4",
};

export default strawberryMilkTheme;
