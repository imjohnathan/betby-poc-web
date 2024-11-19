import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

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
    plugins: [react({
      babel: {
        "plugins": [
          [
            "@babel/plugin-syntax-decorators",
            {
              "legacy": true
            },
          ],
        ]
      }
    }),
    Icons({
      compiler: 'jsx', jsx: 'react',
      customCollections: {
        'customIcons': FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    })],
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
