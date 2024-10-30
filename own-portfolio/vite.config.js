import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // oder '0.0.0.0' für externen Zugriff
    port: 3000, // Standardport
    open: false, // Browser nicht automatisch öffnen
  },
  build: {
    outDir: 'dist', // Standard-Ausgabeverzeichnis
    assetsDir: 'assets', // Verzeichnis für statische Assets
  },
});
