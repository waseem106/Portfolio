import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages repo site: https://waseem106.github.io/Portfolio/
  base: "/Portfolio/",
  plugins: [
    react({
      include: "**/*.{js,jsx,ts,tsx}",
    }),
  ],
});

