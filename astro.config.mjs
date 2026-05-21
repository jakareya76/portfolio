import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jakareya76-portfolio.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
