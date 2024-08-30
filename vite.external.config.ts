/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import css from 'rollup-plugin-css-only';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        css: 'none',
      },
    }),
    css({
      output: 'altcha.css',
    }),
  ],
  build: {
    target: 'modules',
    lib: {
      entry: 'src/entry-external.ts',
      name: 'altcha',
      formats: ['es', 'umd'],
    },
    outDir: 'dist_external',
    minify: 'esbuild',
    rollupOptions: {},
  },
  define: {
    ALTCHA_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  worker: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  test: {
    setupFiles: ['./tests/setup.ts'],
  },
});