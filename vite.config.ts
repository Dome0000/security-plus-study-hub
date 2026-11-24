import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const base =
    process.env.VITE_BASE_PATH ??
    (command === 'build' ? '/security-plus-study-hub/' : '/');

  return {
    base,
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom', 'zod'],
            'vendor-icons': ['lucide-react']
          }
        }
      }
    }
  };
});
