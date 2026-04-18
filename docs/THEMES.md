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
import type { ThemeDefinition } from "@/theme/types";

const myTheme: ThemeDefinition = {
  id: "my-theme",
  name: "My Theme",
  description: "A short description.",
  colors: { /* ...all required color tokens... */ },
  borders: { /* ...all required border tokens... */ },
  shadows: { /* ...all required shadow tokens... */ },
  selection: "#hexcolor",
};

export default myTheme;
```
3. **Save the file.** The theme will be auto-detected and available in the app's theme selector.

### Notes
- The theme id must be unique.
- All required color, border, and shadow tokens must be present (see `ThemeDefinition` in `src/theme/types.ts`).
- No need to manually register or import your theme anywhere else.

---

For examples, see the existing files in `src/theme/config/`.
