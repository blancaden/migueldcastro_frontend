/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      include: ["src/**"],
      reporter: ["text", "text-summary", "cobertura"],
    },
    setupFiles: "./vitest.setup.js",
  },
});
