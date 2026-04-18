import type { ThemeDefinition } from "@/theme/types";

const oceanRaveTheme: ThemeDefinition = {
  id: "ocean-rave",
  name: "Ocean Rave",
  description: "Deep sea blue base pumped with electric aquas and bioluminescent greens.",
  colors: {
    base: "#000d1a",
    mantle: "#001122",
    crust: "#00080f",
    surface0: "#001c33",
    surface1: "#002744",
    surface2: "#003358",
    overlay0: "#0066aa",
    overlay1: "#0088dd",
    overlay2: "#22aaff",
    text: "#e0f8ff",
    subtext1: "#aaeeff",
    subtext0: "#77ddff",
    lavender: "#8866ff",
    mauve: "#cc44ff",
    blue: "#00aaff",
    sapphire: "#0077ff",
    sky: "#44ddff",
    teal: "#00ffdd",
    green: "#00ff88",
    yellow: "#aaff00",
    peach: "#ff8800",
    red: "#ff3366",
    maroon: "#cc0044",
    flamingo: "#ff55bb",
    rosewater: "#eeffff",
  },
  borders: {
    default: "#004477",
    subtle: "#001c33",
    strong: "#0088dd",
    accent: "#00ffdd",
  },
  shadows: {
    card: "0 14px 44px rgba(0,8,15,0.72), 0 0 0 2px rgba(0,255,221,0.14)",
    glow: "0 0 0 2px rgba(0,255,221,0.36), 0 0 26px rgba(0,170,255,0.20)",
    glowGreen: "0 0 0 2px rgba(0,255,136,0.32), 0 0 20px rgba(170,255,0,0.16)",
  },
  selection: "#003358",
};

export default oceanRaveTheme;
