import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export function getPluginsList(command: string) {
  console.log(command, 'command')

  //  当前运行的 npm script 命令名称
  const lifecycle = process.env.npm_lifecycle_event
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
        // src/utils 文件夹下所有的文件包括子文件夹
        './src/utils/**',
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
    // 打包分析
    lifecycle === 'build'
      ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
      : null,
  ]
}
