import type { ThemeDefinition } from "@/theme/types";

const hotSauceTheme: ThemeDefinition = {
  id: "hot-sauce",
  name: "Hot Sauce",
  description: "Fiery reds and volcanic oranges on a scorched dark base. Absolutely brutal.",
  colors: {
    base: "#1a0400",
    mantle: "#220500",
    crust: "#110200",
    surface0: "#330800",
    surface1: "#440a00",
    surface2: "#5c0f00",
    overlay0: "#cc3300",
    overlay1: "#ee5500",
    overlay2: "#ff7722",
    text: "#fff5ee",
    subtext1: "#ffddc8",
    subtext0: "#ffbb99",
    lavender: "#ff44cc",
    mauve: "#ff00aa",
    blue: "#ff6600",
    sapphire: "#ff4400",
    sky: "#ff9933",
    teal: "#ff5500",
    green: "#ddcc00",
    yellow: "#ffdd00",
    peach: "#ff8800",
    red: "#ff1100",
    maroon: "#cc0000",
    flamingo: "#ff3366",
    rosewater: "#fff0ee",
  },
  borders: {
    default: "#880f00",
    subtle: "#440a00",
    strong: "#ff4400",
    accent: "#ff1100",
  },
  shadows: {
    card: "0 14px 44px rgba(17,2,0,0.70), 0 0 0 2px rgba(255,17,0,0.20)",
    glow: "0 0 0 2px rgba(255,17,0,0.40), 0 0 26px rgba(255,85,0,0.22)",
    glowGreen: "0 0 0 2px rgba(221,204,0,0.32), 0 0 18px rgba(255,136,0,0.18)",
  },
  selection: "#660a00",
};

export default hotSauceTheme;
