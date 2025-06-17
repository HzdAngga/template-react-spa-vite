import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { compression } from 'vite-plugin-compression2';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    optimizeDeps: {
      include: ['antd', 'react-router'],
    },
    plugins: [
      react(),
      ViteImageOptimizer(),
      compression({
        algorithm: 'brotliCompress',
        exclude: [/\.(br)$/, /\.(gz)$/],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
      open: true,
    },
    build: {
      minify: 'esbuild',
      outDir: './build',
      sourcemap: true,
    },
  });
};
