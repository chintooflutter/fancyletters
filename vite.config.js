import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcssVite from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // ✅ Ensures proper client-side routing on Vercel
  plugins: [
    tailwindcssVite(),
    react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});