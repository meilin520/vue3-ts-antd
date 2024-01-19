import { defineConfig } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
