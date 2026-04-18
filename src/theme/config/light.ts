import type { ThemeDefinition } from "@/theme/types"

const lightTheme: ThemeDefinition = {
  id: "light",
  name: "Light",
  description:
    "A light mode terminal-inspired palette with soft paper surfaces and high-contrast text.",
  colors: {
    base: "#f4f7fb",
    mantle: "#edf2f7",
    crust: "#e2e8f0",
    surface0: "#e6ecf4",
    surface1: "#dbe4f0",
    surface2: "#cad6e6",
    overlay0: "#8290a5",
    overlay1: "#65748b",
    overlay2: "#475569",
    text: "#0f172a",
    subtext1: "#334155",
    subtext0: "#475569",
    lavender: "#4f46e5",
    mauve: "#7e22ce",
    blue: "#2563eb",
    sapphire: "#0891b2",
    sky: "#0ea5e9",
    teal: "#0d9488",
    green: "#16a34a",
    yellow: "#ca8a04",
    peach: "#ea580c",
    red: "#dc2626",
    maroon: "#be185d",
    flamingo: "#f472b6",
    rosewater: "#fff1f2",
  },
  borders: {
    default: "#cbd5e1",
    subtle: "#e2e8f0",
    strong: "#94a3b8",
    accent: "#818cf8",
  },
  shadows: {
    card: "0 1px 3px 0 rgba(15, 23, 42, 0.10), 0 0 0 1px rgba(148, 163, 184, 0.14)",
    glow: "0 0 0 2px rgba(79, 70, 229, 0.18)",
    glowGreen: "0 0 0 2px rgba(22, 163, 74, 0.18)",
  },
  selection: "#cad6e6",
}

export default lightTheme
