import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
const projectName = "betby-component";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV)
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `${projectName}-entry.js`,
          chunkFileNames: `${projectName}-[name]-[hash].js`,
          assetFileNames: `${projectName}-[name]-[hash].[ext]`,
        },
      },
    },
    // build: {
    //   lib: {
    //     entry: ["./index.html"],
    //     name: "betby-component",
    //     fileName: (format) => `betby-component.${format}.js`,
    //   },
    //   target: "esnext",
    // },
  }
})
