import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return { 
    base: 'https://mtjeth.com/test/',  
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});