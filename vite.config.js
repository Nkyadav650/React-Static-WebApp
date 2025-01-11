import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for cleaner imports
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/' : './', // Base URL for assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Put assets in a separate folder
  },
});
