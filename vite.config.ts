import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Configuration for development server
    return {
      plugins: [preact()],
      base: '/', 
    };
  } else {
    // Configuration for production build
    return {
      plugins: [preact()],
      base: '/Prosite/', 
    };
  }
});
