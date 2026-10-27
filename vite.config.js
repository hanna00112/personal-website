import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at /personal-website/. Local dev stays at /.
  base: process.env.GITHUB_PAGES ? "/personal-website/" : "/",
  root: "client",
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
