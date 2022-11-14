import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/css-grid/' : '/',
})
