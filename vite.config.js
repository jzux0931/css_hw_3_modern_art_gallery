import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/css_hw_3_modern_art_gallery/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        location: resolve(process.cwd(), 'location.html'),
      },
    },
  },
});