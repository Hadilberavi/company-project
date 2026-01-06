import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  // GitHub Pages repo adı
  root: "src",
  base: "/company-project/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        contact: resolve(__dirname, "src/contact.html"),
        services: resolve(__dirname, "src/services.html"),
      },
    },
  },
});
