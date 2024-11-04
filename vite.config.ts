import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src'),
    },
},
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "betby-component",
      fileName: (format) => `betby-component.${format}.js`,
    },
    target: "esnext",
  },
})
