import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://serdarcanb.github.io",
  trailingSlash: "always",
  build: { assets: "assets" },
  vite: { plugins: [tailwindcss()] },
});
