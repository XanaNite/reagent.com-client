import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Matches CRA's default port
    open: true, // Automatically opens browser
  },
  build: {
    outDir: 'build', // Matches CRA's output folder (Vite default is 'dist')
  },
});