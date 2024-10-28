import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import biomePlugin from "vite-plugin-biome";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [TanStackRouterVite(), react(), biomePlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
