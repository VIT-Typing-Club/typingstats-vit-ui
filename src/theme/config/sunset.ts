import type { ThemeDefinition } from "@/theme/types";

const sunsetTheme: ThemeDefinition = {
  id: "sunset",
  name: "Sunset",
  description: "Burnt orange to deep plum. Warm dusk energy with rich shadow depth.",
  colors: {
    base: "#180d0a",
    mantle: "#221109",
    crust: "#0e0704",
    surface0: "#2e1610",
    surface1: "#3d1e15",
    surface2: "#50271a",
    overlay0: "#8a4a30",
    overlay1: "#b36840",
    overlay2: "#d99060",
    text: "#fdf0e0",
    subtext1: "#f0d0aa",
    subtext0: "#d8aa80",
    lavender: "#b06090",
    mauve: "#cc5577",
    blue: "#5599cc",
    sapphire: "#4477aa",
    sky: "#88bbdd",
    teal: "#44998a",
    green: "#88bb44",
    yellow: "#ffcc33",
    peach: "#ff8833",
    red: "#ff3322",
    maroon: "#cc2211",
    flamingo: "#ee6677",
    rosewater: "#ffeedd",
  },
  borders: {
    default: "#5a2e1c",
    subtle: "#2e1610",
    strong: "#cc6633",
    accent: "#ff8833",
  },
  shadows: {
    card: "0 16px 48px rgba(14,7,4,0.65), 0 0 0 1px rgba(255,136,51,0.12)",
    glow: "0 0 0 2px rgba(255,136,51,0.35), 0 0 24px rgba(204,85,119,0.18)",
    glowGreen: "0 0 0 2px rgba(136,187,68,0.28), 0 0 18px rgba(68,153,138,0.14)",
  },
  selection: "#4a1e10",
};

export default sunsetTheme;
