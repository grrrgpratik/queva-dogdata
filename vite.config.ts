import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/queva': {
        target: 'https://api-queva-prod.azurewebsites.net/api/v1/dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/queva/, '')
      }
    }
  }
});