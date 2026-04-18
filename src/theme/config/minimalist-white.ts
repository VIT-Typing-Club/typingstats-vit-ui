import type { ThemeDefinition } from "@/theme/types";

const minimalistWhiteTheme: ThemeDefinition = {
  id: "minimalist-white",
  name: "Minimalist White",
  description: "Clean, airy, and editorial. Pure whites with ink-black type and a single accent.",
  colors: {
    base: "#ffffff",
    mantle: "#f7f7f7",
    crust: "#efefef",
    surface0: "#f0f0f0",
    surface1: "#e8e8e8",
    surface2: "#dedede",
    overlay0: "#bbbbbb",
    overlay1: "#999999",
    overlay2: "#666666",
    text: "#111111",
    subtext1: "#333333",
    subtext0: "#555555",
    lavender: "#6655cc",
    mauve: "#aa44bb",
    blue: "#1a6ef5",
    sapphire: "#0055cc",
    sky: "#2299dd",
    teal: "#009988",
    green: "#2a8a3e",
    yellow: "#c8880a",
    peach: "#d4601a",
    red: "#cc2222",
    maroon: "#991111",
    flamingo: "#cc4477",
    rosewater: "#f5e8ec",
  },
  borders: {
    default: "#d4d4d4",
    subtle: "#ebebeb",
    strong: "#888888",
    accent: "#1a6ef5",
  },
  shadows: {
    card: "0 2px 12px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)",
    glow: "0 0 0 2px rgba(26,110,245,0.18), 0 4px 16px rgba(26,110,245,0.10)",
    glowGreen: "0 0 0 2px rgba(42,138,62,0.18), 0 4px 12px rgba(42,138,62,0.10)",
  },
  selection: "#e0e8ff",
};

export default minimalistWhiteTheme;
