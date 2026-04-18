import type { ThemeDefinition } from "@/theme/types";

const mochaLatteTheme: ThemeDefinition = {
  id: "mocha-latte",
  name: "Mocha Latte",
  description: "Warm espresso browns and cream. Comfortable, rich, coffeehouse aesthetic.",
  colors: {
    base: "#1a1108",
    mantle: "#221608",
    crust: "#120c04",
    surface0: "#2c1e0e",
    surface1: "#3a2812",
    surface2: "#4a3318",
    overlay0: "#7a5a38",
    overlay1: "#9e7850",
    overlay2: "#c29a72",
    text: "#f5ead8",
    subtext1: "#e0ccaa",
    subtext0: "#c4a87a",
    lavender: "#9977cc",
    mauve: "#bb66aa",
    blue: "#5588bb",
    sapphire: "#3366aa",
    sky: "#77aacc",
    teal: "#449988",
    green: "#77aa55",
    yellow: "#ccaa33",
    peach: "#cc7733",
    red: "#cc4422",
    maroon: "#aa3311",
    flamingo: "#cc6677",
    rosewater: "#f5e0d8",
  },
  borders: {
    default: "#5a3d22",
    subtle: "#2c1e0e",
    strong: "#9e7850",
    accent: "#cc7733",
  },
  shadows: {
    card: "0 12px 40px rgba(18,12,4,0.62), 0 0 0 1px rgba(204,119,51,0.10)",
    glow: "0 0 0 2px rgba(204,119,51,0.30), 0 0 22px rgba(187,102,170,0.14)",
    glowGreen: "0 0 0 2px rgba(119,170,85,0.26), 0 0 16px rgba(68,153,136,0.12)",
  },
  selection: "#3a2410",
};

export default mochaLatteTheme;
