import type { ThemeDefinition } from "@/theme/types";

const electricLemonTheme: ThemeDefinition = {
  id: "electric-lemon",
  name: "Electric Lemon",
  description: "Screaming acid yellow base with electric contrasts. Bold as it gets.",
  colors: {
    base: "#e8ff00",
    mantle: "#d4ee00",
    crust: "#f5ff55",
    surface0: "#ccdd00",
    surface1: "#bbcc00",
    surface2: "#aabb00",
    overlay0: "#445500",
    overlay1: "#334400",
    overlay2: "#223300",
    text: "#111500",
    subtext1: "#222800",
    subtext0: "#334400",
    lavender: "#8800ff",
    mauve: "#cc00ee",
    blue: "#0011ff",
    sapphire: "#0055dd",
    sky: "#0099ff",
    teal: "#00cc88",
    green: "#00aa00",
    yellow: "#ff8800",
    peach: "#ff5500",
    red: "#ff0022",
    maroon: "#cc0011",
    flamingo: "#ff0077",
    rosewater: "#ffeecc",
  },
  borders: {
    default: "#99aa00",
    subtle: "#ccdd00",
    strong: "#334400",
    accent: "#8800ff",
  },
  shadows: {
    card: "0 12px 40px rgba(17,21,0,0.30), 0 0 0 2px rgba(136,0,255,0.18)",
    glow: "0 0 0 2px rgba(136,0,255,0.35), 0 0 24px rgba(204,0,238,0.18)",
    glowGreen: "0 0 0 2px rgba(0,170,0,0.30), 0 0 18px rgba(0,204,136,0.18)",
  },
  selection: "#bbcc00",
};

export default electricLemonTheme;
