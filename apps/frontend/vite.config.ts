import { sentryVitePlugin } from '@sentry/vite-plugin';
/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: 'j4a-industries',
    project: 'jobstream',
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, '../../assets/'),
    },
  },
  server: {
    host: true,
  },
  build: {
    sourcemap: false,
    minify: true,
    cssMinify: true,
  },
});
