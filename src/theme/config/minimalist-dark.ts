import type { ThemeDefinition } from "@/theme/types";

const minimalistDarkTheme: ThemeDefinition = {
  id: "minimalist-dark",
  name: "Minimalist Dark",
  description: "Pure obsidian base, subtle grey hierarchy, single cool-white accent.",
  colors: {
    base: "#0e0e0e",
    mantle: "#161616",
    crust: "#080808",
    surface0: "#1c1c1c",
    surface1: "#242424",
    surface2: "#2e2e2e",
    overlay0: "#484848",
    overlay1: "#6a6a6a",
    overlay2: "#909090",
    text: "#f0f0f0",
    subtext1: "#cccccc",
    subtext0: "#aaaaaa",
    lavender: "#9988ff",
    mauve: "#cc77ee",
    blue: "#5599ff",
    sapphire: "#3377ee",
    sky: "#66bbff",
    teal: "#33ccaa",
    green: "#55cc66",
    yellow: "#ddbb44",
    peach: "#ee8844",
    red: "#ee4444",
    maroon: "#cc2233",
    flamingo: "#ee6688",
    rosewater: "#f5dde5",
  },
  borders: {
    default: "#2e2e2e",
    subtle: "#1c1c1c",
    strong: "#555555",
    accent: "#5599ff",
  },
  shadows: {
    card: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
    glow: "0 0 0 2px rgba(85,153,255,0.25), 0 0 20px rgba(85,153,255,0.12)",
    glowGreen: "0 0 0 2px rgba(85,204,102,0.22), 0 0 16px rgba(51,204,170,0.12)",
  },
  selection: "#2a2a3a",
};

export default minimalistDarkTheme;
