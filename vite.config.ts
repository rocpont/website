import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { defineConfig, type Plugin } from 'vite'

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const dist = path.resolve(__dirname, 'dist')
      const index = path.join(dist, 'index.html')
      const fallback = path.join(dist, '404.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, fallback)
      }
    }
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/roc-pont/' : '/',
  plugins: [react(), tailwindcss(), spaFallback()],
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
