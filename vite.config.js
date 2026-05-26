
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression(),
  ],

  server: {
    port: 3000,
  },

  build: {
    outDir: 'dist',

    minify: 'esbuild',

    target: 'es2015',

    cssCodeSplit: true,

    assetsInlineLimit: 10000,

    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {

          if (id.includes('node_modules')) {

            if (
              id.includes('react') ||
              id.includes('react-dom')
            ) {
              return 'react';
            }

            if (id.includes('react-router')) {
              return 'router';
            }

            if (
              id.includes('recharts') ||
              id.includes('d3')
            ) {
              return 'charts';
            }

            if (id.includes('axios')) {
              return 'axios';
            }

            return 'vendor';
          }
        },
      },
    },
  },
});

