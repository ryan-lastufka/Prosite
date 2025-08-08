import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production' || command === 'build';

  return {
    plugins: [preact()],
    // base: isProduction ? '/Prosite/' : '/',
    base: '/Prosite/',
  };
});