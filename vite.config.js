// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // ✅ Build configuration - fixed manualChunks
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // ✅ manualChunks should be a FUNCTION
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer';
            }
            if (id.includes('axios')) {
              return 'axios';
            }
          }
        },
      },
    },
  },
  
  // ✅ Server configuration
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
  // ✅ Preview configuration
  preview: {
    port: 5173,
  },
})