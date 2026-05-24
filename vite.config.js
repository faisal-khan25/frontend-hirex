import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    target: 'es2015',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('d3')) return 'recharts';
            if (id.includes('react-router')) return 'router';
            if (id.includes('axios')) return 'axios';
            if (id.includes('react-dom') || id.includes('react')) return 'react';
            return 'vendor';
          }
        },
      },
    },
  },
})
