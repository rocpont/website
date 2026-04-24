import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
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
    open: true,
    allowedHosts: ['xmwiot-ip-213-229-146-122.tunnelmole.net']
  },
  preview: {
    port: 5173
  }
}))
