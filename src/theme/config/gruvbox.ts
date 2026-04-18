import type { ThemeDefinition } from "@/theme/types";

const gruvboxTheme: ThemeDefinition = {
  id: "gruvbox",
  name: "Gruvbox",
  description: "Retro groove with warm earth tones and high-contrast accents.",
  colors: {
    base: "#282828",
    mantle: "#1d2021",
    crust: "#141414",
    surface0: "#32302f",
    surface1: "#3c3836",
    surface2: "#504945",
    overlay0: "#665c54",
    overlay1: "#7c6f64",
    overlay2: "#928374",
    text: "#ebdbb2",
    subtext1: "#d5c4a1",
    subtext0: "#bdae93",
    lavender: "#d3869b",
    mauve: "#b16286",
    blue: "#83a598",
    sapphire: "#458588",
    sky: "#7daea3",
    teal: "#689d6a",
    green: "#98971a",
    yellow: "#d79921",
    peach: "#fe8019",
    red: "#cc241d",
    maroon: "#9d0006",
    flamingo: "#fb4934",
    rosewater: "#f9e8e0",
  },
  borders: {
    default: "#504945",
    subtle: "#3c3836",
    strong: "#928374",
    accent: "#d79921",
  },
  shadows: {
    card: "0 10px 36px rgba(20,20,20,0.65), 0 0 0 1px rgba(215,153,33,0.10)",
    glow: "0 0 0 2px rgba(215,153,33,0.28), 0 0 20px rgba(254,128,25,0.14)",
    glowGreen: "0 0 0 2px rgba(152,151,26,0.28), 0 0 16px rgba(104,157,106,0.14)",
  },
  selection: "#504945",
};

export default gruvboxTheme;
