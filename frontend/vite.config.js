import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const repoName = '/todo-app/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  daisyui: {
    themes: true,
  },
  base: repoName
});
