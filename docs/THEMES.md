# Theme System Guide

## How Theme Logic Works

- All themes are defined as individual files in `src/theme/config/`.
- Each theme file exports a single theme as the default export, using the `ThemeDefinition` type from `src/theme/types.ts`.
- The app automatically loads all themes using Vite's `import.meta.glob` in `src/theme/themeRegistry.ts`.
- The `themes` array is built from all default exports in the config folder and is used throughout the UI.
- The default theme is chosen based on the user's OS color scheme (dark or light) by id, but users can select any theme from the Theme Selector.

## How to Add a New Theme

1. **Create a new file** in `src/theme/config/` (e.g., `my-theme.ts`).
2. **Export your theme as default** using the `ThemeDefinition` type. Example:

```ts
import type { ThemeDefinition } from "@/theme/types"

const myTheme: ThemeDefinition = {
  id: "my-theme",
  name: "My Theme",
  description: "A short description.",
  colors: {
    /* ...all required color tokens... */
  },
  borders: {
    /* ...all required border tokens... */
  },
  shadows: {
    /* ...all required shadow tokens... */
  },
  selection: "#hexcolor",
}

export default myTheme
```

3. **Save the file.** The theme will be auto-detected and available in the app's theme selector.

### Notes

- The theme id must be unique.
- All required color, border, and shadow tokens must be present (see `ThemeDefinition` in `src/theme/types.ts`).
- No need to manually register or import your theme anywhere else.

---

For examples, see the existing files in `src/theme/config/`.

---

## Theme Previews

Below are previews of available themes. Each preview includes the theme name, a short description, and a screenshot (replace the placeholder images with real screenshots for production use).

### Arctic

**Description:** Ice blue and snow white. Crisp, clinical, and breathtakingly cold.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/ce798911-7201-4798-8f3a-bf174874146c" />

### Baby Pink

**Description:** Soft blush pinks with gold and lilac. Delicate but never boring.
<img width="1919" height="883" alt="image" src="https://github.com/user-attachments/assets/b48dc78c-9da8-4d30-9981-d68fef006fc2" />

### Bold Red

**Description:** Maximum red energy. No compromises, no pastels. Just pure saturated aggression.
<img width="1919" height="882" alt="image" src="https://github.com/user-attachments/assets/419a572b-814f-41fd-8707-43520830786a" />

### Bubblegum Pop

**Description:** Bright mint green base with hot pink and electric yellow pops. Y2K energy.
<img width="1919" height="883" alt="image" src="https://github.com/user-attachments/assets/bc8f796e-6633-4a2d-9229-ef6c0fd4c18e" />

### Candy Land

**Description:** Bubblegum pinks, lollipop reds, candy blues. Pure sugar-rush energy.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/9f7837d7-53f3-46a7-9aa5-fbe5ebeb7748" />

### Catppuccin

**Description:** The original dark terminal palette with deep navy surfaces and neon-leaning accents.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/1875579a-54f2-439b-9480-f471db9d6459" />

### Cotton Candy

**Description:** Pastel pink and mint blue swirled together. Sweet, airy, and fun.
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/c313b7fe-db86-4dbc-9ee2-7c6280e19ee4" />

### Dracula

**Description:** The iconic purple-tinted dark theme. Timeless and developer-beloved.
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/c133a93d-802c-4dca-bf6b-38cff9c14297" />

### Electric Lemon

**Description:** Screaming acid yellow base with electric contrasts. Bold as it gets.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/9d4f2782-27ad-4c32-b28c-2018d5792872" />

### Forest Terminal

**Description:** Deep forest green base with moss and bark tones. Organic and focused.
<img width="1919" height="875" alt="image" src="https://github.com/user-attachments/assets/c0cfb91b-dc9f-4315-affb-dc6f981b9df9" />

### Gruvbox

**Description:** Retro groove with warm earth tones and high-contrast accents.
<img width="1916" height="876" alt="image" src="https://github.com/user-attachments/assets/c464e2d4-cf80-45e5-a452-90958bcb5ee1" />

### High Contrast

**Description:** Maximum legibility. Pure black and white with saturated WCAG-passing accents.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/b1e2970e-35e9-4aa4-8459-5c5ecf2de55a" />

### Hot Sauce

**Description:** Fiery reds and volcanic oranges on a scorched dark base. Absolutely brutal.
<img width="1918" height="880" alt="image" src="https://github.com/user-attachments/assets/fb25436b-e7b3-496d-8e7c-6235e3d9648f" />

### Jedi

**Description:** The light side. Temple stone, pure blue kyber, and the calm glow of the Force.
<img width="1915" height="876" alt="image" src="https://github.com/user-attachments/assets/3f742302-ff66-43ff-949e-549663274bc6" />

### Light

**Description:** A light mode terminal-inspired palette with soft paper surfaces and high-contrast text.
<img width="1919" height="880" alt="image" src="https://github.com/user-attachments/assets/1e21d574-acd7-43c1-b717-c23f2551e992" />

### Mango Tango

**Description:** Tropical orange and yellow. Vitamin C overload, sun-bleached and vibrant.
<img width="1919" height="880" alt="image" src="https://github.com/user-attachments/assets/3549d402-db29-47ae-9ae1-2541eb177d5c" />

### Minimalist Dark

**Description:** Pure obsidian base, subtle grey hierarchy, single cool-white accent.
<img width="1919" height="875" alt="image" src="https://github.com/user-attachments/assets/fd0f1d01-3b2e-4ab0-a454-977acc8bbf39" />

### Minimalist White

**Description:** Clean, airy, and editorial. Pure whites with ink-black type and a single accent.
<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/00a5ed64-12f2-4d52-90c2-fc9fb64d49b4" />

### Mocha Latte

**Description:** Warm espresso browns and cream. Comfortable, rich, coffeehouse aesthetic.
<img width="1919" height="880" alt="image" src="https://github.com/user-attachments/assets/4f6c9a4b-3f8a-41c9-a9cc-347911748e1c" />

### Neon Spectrum

**Description:** A maximal neon theme with electric gradients, glowing surfaces, and arcade-level color energy.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/df64efd1-93cd-44a8-b4c3-cc642fa7eeab" />

### Nord

**Description:** Arctic fjords and polar nights. Muted blue-grey with icy accents.
<img width="1919" height="876" alt="image" src="https://github.com/user-attachments/assets/4ea10648-3e33-4ce4-8a1b-64ff95050f53" />

### Ocean Rave

**Description:** Deep sea blue base pumped with electric aquas and bioluminescent greens.
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/6c23f482-458d-4fa7-a451-6a4453616071" />

### Paper

**Description:** Off-white parchment with sepia ink. Feels like reading a physical book.
<img width="1919" height="876" alt="image" src="https://github.com/user-attachments/assets/34b12ce4-6bdb-420b-a599-7dcea7be2c79" />

### Professional Red

**Description:** A refined editorial theme with oxblood accents, warm neutrals.
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/53b08126-ae81-44b8-94c6-4f2b453c9688" />

### Rosé Pine

**Description:** Warm dusty rose base with muted jewel tones. Cozy and literary.
<img width="1919" height="873" alt="image" src="https://github.com/user-attachments/assets/f69fe4f8-2677-48a0-b105-eb50ebcc3b24" />

### Sith

**Description:** The dark side. Obsidian black, blood red, and corrupted lightning. Power at any cost.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/1104a2ba-5c95-4e80-9417-e646eb39624f" />

### Solarized Light

**Description:** The classic warm-cream Solarized palette. Timeless and easy on the eyes.
<img width="1919" height="876" alt="image" src="https://github.com/user-attachments/assets/af1eb0a9-53ed-40c8-8f34-43adf1398cd8" />

### Strawberry Milk

**Description:** Warm blush whites and deep strawberry reds. Rich, creamy, sweet.
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/0dfff91d-1e8f-43c9-889e-57e140e9a62e" />

### Sunset

**Description:** Burnt orange to deep plum. Warm dusk energy with rich shadow depth.
<img width="1919" height="876" alt="image" src="https://github.com/user-attachments/assets/0fd95d95-f6f7-4738-affc-545bd119bf2d" />

### Synthwave

**Description:** 80s retrowave palette. Hot pink grids, electric purple skies, chrome type.
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/833c3a23-ab5d-48b3-b6b3-2cd1dd915d56" />

### Tokyo Night

**Description:** Rainy Tokyo streets at midnight. Deep navy with neon-soaked accents.
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/742c11de-9681-43d3-b639-a6a3f4e59e9d" />

### Vaporwave

**Description:** Lilac and teal in pastel neon. Glitchy, dreamy, Windows 95 in a mall.
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/2b94a51c-c644-43b3-aebb-8b71c31bea29" />
