import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizedDeps: {
  //   include: ["jwt-decode"],
  // },
  server: {
    port: 3001, // frontend port
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3000", // backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
