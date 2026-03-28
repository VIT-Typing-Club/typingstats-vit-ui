// Catppuccin Macchiato design tokens
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Base surfaces ──────────────────────────────────────────────
        base: "#1e2030", // page background
        mantle: "#181926", // navbar, card backgrounds
        crust: "#0f1016", // deepest surface / borders on dark panels

        // ── Surface layers (elevation) ─────────────────────────────────
        surface0: "#1e2030",
        surface1: "#252840",
        surface2: "#2e3252",

        // ── Overlays (borders, dividers) ───────────────────────────────
        overlay0: "#6e738d",
        overlay1: "#8087a2",
        overlay2: "#939ab7",

        // ── Text ───────────────────────────────────────────────────────
        text: "#cad3f5", // primary
        subtext1: "#b8c0e0", // secondary / labels
        subtext0: "#a5adcb", // muted / placeholders

        // ── Accents ────────────────────────────────────────────────────
        lavender: "#b7bdf8", // primary interactive / focus rings
        mauve: "#c6a0f6", // rank badges / highlights
        blue: "#8aadf4", // links
        sapphire: "#7dc4e4", // info states
        sky: "#91d7e3", // secondary info
        teal: "#8bd5ca", // accents / tags

        // ── Semantic ──────────────────────────────────────────────────
        green: "#a6da95", // success / WPM gains / verified
        yellow: "#eed49f", // warning / caution
        peach: "#f5a97f", // mid-tier / notice
        red: "#ed8796", // errors / declines
        maroon: "#ee99a0", // soft error variant
        flamingo: "#f0c6c6", // very soft
        rosewater: "#f4dbd6", // lightest accent
      },

      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ['"Sora"', "ui-sans-serif", "sans-serif"],
        // Use font-mono for all stats/WPM/rank numbers
        // Use font-sans for all UI copy / labels
      },

      fontSize: {
        // Tight typographic scale for dense terminal UIs
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.8125rem", { lineHeight: "1.25rem" }],
        base: ["0.875rem", { lineHeight: "1.5rem" }],
        lg: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.125rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "3xl": ["1.5rem", { lineHeight: "2rem" }],
      },

      borderColor: {
        // Much darker, true terminal-divider color
        DEFAULT: "#363a4f", // Catppuccin Surface1
        subtle: "#24273a", // Catppuccin Surface0
        strong: "#494d64", // Catppuccin Surface2
        accent: "#b7bdf8", // Lavender
      },

      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(110,115,141,0.15)",
        glow: "0 0 0 2px rgba(183,189,248,0.35)",
        "glow-green": "0 0 0 2px rgba(166,218,149,0.35)",
      },

      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
        "slide-in": "slide-in 0.22s ease-out both",
        "count-up": "count-up 0.18s ease-out both",
      },
    },
  },
  plugins: [],
}

/*
─────────────────────────────────────────────────────────────────────────────
  USAGE CHEATSHEET
─────────────────────────────────────────────────────────────────────────────

  Page background:      bg-base
  Card / panel:         bg-mantle border border-default
  Elevated card:        bg-surface1 border border-default
  Dividers:             border-subtle
  Focus rings:          ring-2 ring-lavender/40

  Primary text:         text-text
  Secondary / labels:   text-subtext1
  Muted / placeholder:  text-subtext0
  Dimmed captions:      text-overlay1

  Accent / CTA:         text-lavender
  Rank badges:          text-mauve    bg-mauve/10
  WPM stats:            font-mono text-text
  Verified:             text-green
  Error:                text-red
  Warning:              text-yellow

  Tmux pane header:     bg-mantle border-b border-default px-3 py-1.5
                        text-xs font-mono text-subtext0 uppercase tracking-widest

  Stat number:          font-mono text-2xl font-semibold tabular-nums text-lavender

─────────────────────────────────────────────────────────────────────────────
*/

// https://rosepinetheme.com/palette/ingredients/?flavor=moon
// Swap this in place of the Catppuccin config. All token names are identical
// so no component code needs to change.

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // ── Base surfaces ──────────────────────────────────────────────
//         base:     "#232136",  // page background        (moon base)
//         mantle:   "#1f1d2e",  // navbar, card bg        (moon surface)
//         crust:    "#191724",  // deepest / true black   (rose pine base)

//         // ── Surface layers ─────────────────────────────────────────────
//         surface0: "#2a273f",  // subtle elevation
//         surface1: "#312e48",  // cards, inputs
//         surface2: "#3a3752",  // hover surfaces

//         // ── Overlays (borders, dividers) ───────────────────────────────
//         overlay0: "#59546d",  // faint borders
//         overlay1: "#6e6a86",  // mid borders / icons
//         overlay2: "#908caa",  // active borders

//         // ── Text ───────────────────────────────────────────────────────
//         text:     "#e0def4",  // primary
//         subtext1: "#cecaed",  // secondary
//         subtext0: "#b9b6d3",  // muted / placeholders

//         // ── Accents ────────────────────────────────────────────────────
//         lavender: "#c4a7e7",  // primary interactive / focus  (iris)
//         mauve:    "#c4a7e7",  // same — iris is the hero accent
//         blue:     "#9ccfd8",  // foam — links / info
//         sapphire: "#9ccfd8",  // foam alias
//         sky:      "#9ccfd8",  // foam alias
//         teal:     "#9ccfd8",  // foam

//         // ── Semantic ──────────────────────────────────────────────────
//         green:    "#3e8fb0",  // pine — success / verified  (use foam for lighter)
//         yellow:   "#f6c177",  // gold — #1 rank / warnings
//         peach:    "#ea9a97",  // rose — #3 rank / notices
//         red:      "#eb6f92",  // love — errors
//         maroon:   "#ea9a97",  // rose alias
//         flamingo: "#ea9a97",  // rose alias
//         rosewater:"#e0def4",  // text alias (no rosewater in moon)

//         // ── Named rose pine tokens (for direct use if preferred) ───────
//         // rose:    "#ea9a97"
//         // love:    "#eb6f92"
//         // gold:    "#f6c177"
//         // iris:    "#c4a7e7"
//         // foam:    "#9ccfd8"
//         // pine:    "#3e8fb0"
//         // subtle:  "#6e6a86"
//         // muted:   "#59546d"
//       },

//       fontFamily: {
//         mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
//         sans: ['"Sora"', 'ui-sans-serif', 'sans-serif'],
//       },

//       fontSize: {
//         "2xs": ["0.625rem", { lineHeight: "1rem" }],
//         xs:    ["0.75rem",  { lineHeight: "1.125rem" }],
//         sm:    ["0.8125rem",{ lineHeight: "1.25rem" }],
//         base:  ["0.875rem", { lineHeight: "1.5rem" }],
//         lg:    ["1rem",     { lineHeight: "1.5rem" }],
//         xl:    ["1.125rem", { lineHeight: "1.75rem" }],
//         "2xl": ["1.25rem",  { lineHeight: "1.75rem" }],
//         "3xl": ["1.5rem",   { lineHeight: "2rem" }],
//       },

//       borderColor: {
//         DEFAULT: "rgba(89, 84, 109, 0.35)",   // overlay0 @ 35%
//         subtle:  "rgba(89, 84, 109, 0.18)",
//         strong:  "rgba(110, 106, 134, 0.55)",
//         accent:  "rgba(196, 167, 231, 0.35)", // iris @ 35%
//       },

//       boxShadow: {
//         card:         "0 1px 3px 0 rgba(0,0,0,0.5), 0 0 0 1px rgba(89,84,109,0.18)",
//         glow:         "0 0 0 2px rgba(196,167,231,0.30)",
//         "glow-green": "0 0 0 2px rgba(156,207,216,0.30)",
//       },

//       keyframes: {
//         "pulse-dot": {
//           "0%, 100%": { opacity: "1" },
//           "50%":       { opacity: "0.35" },
//         },
//         "slide-in": {
//           from: { opacity: "0", transform: "translateY(6px)" },
//           to:   { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
//         "slide-in":  "slide-in 0.22s ease-out both",
//       },
//     },
//   },
//   plugins: [],
// };

// /*
// ─────────────────────────────────────────────────────────────────────────────
//   ROSÉ PINE MOON — TOKEN MAP
// ─────────────────────────────────────────────────────────────────────────────

//   Page background:      bg-base        #232136
//   Navbar / cards:       bg-mantle      #1f1d2e
//   Deepest surface:      bg-crust       #191724
//   Elevated cards:       bg-surface1    #312e48
//   Hover surface:        bg-surface2    #3a3752

//   Primary text:         text-text      #e0def4
//   Secondary:            text-subtext1  #cecaed
//   Muted:                text-subtext0  #b9b6d3
//   Dimmed:               text-overlay1  #6e6a86

//   Primary accent:       text-lavender  #c4a7e7  (iris — purple)
//   Rank #1 gold:         text-yellow    #f6c177
//   Rank #3 rose:         text-peach     #ea9a97
//   Links / info:         text-blue      #9ccfd8  (foam — teal-blue)
//   Success / verified:   text-green     #3e8fb0  (pine) or text-blue (foam)
//   Errors:               text-red       #eb6f92  (love)

//   Pane dot accents:
//     daily competition   bg-lavender    iris
//     my ranks            bg-peach       rose
//     leaderboards        bg-blue        foam

//   Focus ring:           ring-lavender/35
//   Border default:       border-default/30  (overlay0 @ ~30%)

// ─────────────────────────────────────────────────────────────────────────────
// */
