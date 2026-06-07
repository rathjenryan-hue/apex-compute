import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alphaX: resolve(__dirname, 'alpha-x.html'),
        sentinel: resolve(__dirname, 'sentinel.html'),
      },
    },
  },
})
