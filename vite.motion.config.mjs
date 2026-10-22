import { defineConfig } from 'vite';

export default defineConfig({
  configFile: false,
  root: '.',
  build: {
    outDir: 'dist-motion',
    cssFileName: 'motion.bundle',
    cssCodeSplit: false,
    lib: {
      entry: 'src/motion.jsx',
      name: 'PirateRebornMotion',
      formats: ['iife'],
      fileName: () => 'motion.bundle.js'
    },
    rollupOptions: {}
  }
});
