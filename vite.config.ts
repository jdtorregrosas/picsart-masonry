import react from "@vitejs/plugin-react-swc";
import { defineConfig, UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
} as UserConfig);
