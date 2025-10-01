import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import {nodePolyfills} from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), tailwindcss(), nodePolyfills({
      protocolImports: true, // enables `node:` protocol imports
  }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/index-chunk.js`, 
        assetFileNames: `assets/index.css`,       
        manualChunks: undefined,
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
    preview: {
      port: 5173
    },
    optimizeDeps: {
        include: ["buffer", "process"], // ensures Buffer & process are bundled
    },
})
