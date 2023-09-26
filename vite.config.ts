/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': `${path.resolve(__dirname, './src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),
    // 自动导入模块 https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [ // 自动导入的模块
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: 'src/type/auto-import.d.ts', // 生成的dts文件
      dirs: [ // 自动导入的模块的目录
        './src/composables',
      ],
      vueTemplate: true, // 自动导入的模块是否是vue组件
    }),

    // 自动导入组件 https://github.com/antfu/vite-plugin-components
    Components({
      dts: 'src/type/components.d.ts', // 生成的dts文件
      resolvers: [
        AntDesignVueResolver({ importStyle: 'less' }),
      ],
      dirs: [
        './src/components',
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
