import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "betby-component",
      fileName: (format) => `betby-component.${format}.js`,
    },
    target: "esnext",
  },
})
