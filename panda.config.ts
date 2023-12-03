import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Presets to use
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The framework you are using
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
