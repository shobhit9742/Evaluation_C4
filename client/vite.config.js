import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // '/api' should match the route prefix used for API calls
        // target: "http://localhost:4000",
        target: "https://oliviaems.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
