/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import { getPluginsList } from './build/unplugin'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}/`,
    },
  },
  plugins: getPluginsList(),

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
