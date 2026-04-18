import type { ThemeDefinition } from "@/theme/types"

const babyPinkTheme: ThemeDefinition = {
  id: "baby-pink",
  name: "Baby Pink",
  description:
    "Soft blush pinks with gold and lilac. Delicate but never boring.",
  colors: {
    base: "#fce4ec",
    mantle: "#f8d7e6",
    crust: "#ffeef5",
    surface0: "#f9cfe0",
    surface1: "#f5b8d2",
    surface2: "#efa0c2",
    overlay0: "#d4608a",
    overlay1: "#bb3d6e",
    overlay2: "#8f1f4d",
    text: "#3d0022",
    subtext1: "#600033",
    subtext0: "#880044",
    lavender: "#bb66ff",
    mauve: "#dd44cc",
    blue: "#6688ff",
    sapphire: "#4455ee",
    sky: "#88aaff",
    teal: "#44ccbb",
    green: "#66cc77",
    yellow: "#ffcc44",
    peach: "#ff9966",
    red: "#ff4466",
    maroon: "#cc2244",
    flamingo: "#ff77bb",
    rosewater: "#fff5f9",
  },
  borders: {
    default: "#f5a8cb",
    subtle: "#fcd4e6",
    strong: "#dd44aa",
    accent: "#ff4466",
  },
  shadows: {
    card: "0 8px 32px rgba(61,0,34,0.14), 0 0 0 1px rgba(255,68,102,0.14)",
    glow: "0 0 0 2px rgba(255,68,102,0.25), 0 0 20px rgba(221,68,204,0.16)",
    glowGreen:
      "0 0 0 2px rgba(102,204,119,0.25), 0 0 14px rgba(68,204,187,0.14)",
  },
  selection: "#f9c0d8",
}

export default babyPinkTheme
