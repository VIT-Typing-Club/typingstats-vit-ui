import type { ThemeDefinition } from "@/theme/types"

const arcticTheme: ThemeDefinition = {
  id: "arctic",
  name: "Arctic",
  description:
    "Ice blue and snow white. Crisp, clinical, and breathtakingly cold.",
  colors: {
    base: "#f0f5fa",
    mantle: "#e4edf5",
    crust: "#f8fbfd",
    surface0: "#dde8f2",
    surface1: "#cddaea",
    surface2: "#bccde0",
    overlay0: "#8aaac4",
    overlay1: "#6688aa",
    overlay2: "#446688",
    text: "#0d1f2d",
    subtext1: "#1e3a4f",
    subtext0: "#345566",
    lavender: "#5566cc",
    mauve: "#8844bb",
    blue: "#1166cc",
    sapphire: "#0055aa",
    sky: "#3399cc",
    teal: "#008899",
    green: "#227744",
    yellow: "#997700",
    peach: "#bb5522",
    red: "#bb2233",
    maroon: "#881122",
    flamingo: "#bb3366",
    rosewater: "#f5eef2",
  },
  borders: {
    default: "#c4d8e8",
    subtle: "#dde8f2",
    strong: "#6688aa",
    accent: "#1166cc",
  },
  shadows: {
    card: "0 4px 24px rgba(13,31,45,0.08), 0 0 0 1px rgba(17,102,204,0.08)",
    glow: "0 0 0 2px rgba(17,102,204,0.20), 0 6px 20px rgba(51,153,204,0.14)",
    glowGreen:
      "0 0 0 2px rgba(34,119,68,0.18), 0 4px 14px rgba(0,136,153,0.12)",
  },
  selection: "#ccddf5",
}

export default arcticTheme
