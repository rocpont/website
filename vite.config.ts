import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/roc-pont/' : '/',
  plugins: [svgr(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true
  },
  preview: {
    port: 5173
  }
}))
