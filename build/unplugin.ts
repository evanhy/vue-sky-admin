import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export function getPluginsList() {
  return [
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
      dts: 'types/auto-import.d.ts', // 生成的dts文件
      dirs: [ // 自动导入的模块的目录
        './src/hooks',
        './src/utils',
      ],
      resolvers: [
        ElementPlusResolver(),
      ],
    }),

    // 自动导入组件 https://github.com/antfu/vite-plugin-components
    Components({
      dts: 'types/components.d.ts', // 生成的dts文件
      resolvers: [
        ElementPlusResolver(),
      ],
      dirs: [
        './src/components',
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ]
}
