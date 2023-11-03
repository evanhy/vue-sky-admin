import path from 'node:path'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import { configMockPlugin } from './mock'
import { configCompressPlugin } from './compress'

export function getPluginsList(command: string, viteEnv: ViteEnv) {
  // mode 是 vite 的运行模式，可选值为：development 或 production
  // command  serve | build 开发环境为 serve，生产环境为 build
  // viteEnv 是当前环境变量

  //  当前运行的 npm script 命令名称
  const lifecycle = process.env.npm_lifecycle_event
  return [
    // vue 宏
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
      dirs: [
        // 自动导入的模块的目录
        'src/hooks/*.ts',
        // src/utils 文件夹下所有的文件, 不包含子目录
        'src/utils/*.ts',
        'src/utils/**/index.ts',
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
    }),

    // UnoCSS https://github.com/antfu/unocss 查看 uno.config.ts 相关配置
    UnoCSS(),

    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), './src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),

    //  mock
    viteEnv.VITE_APP_USE_MOCK ? configMockPlugin(command) : null,

    // 打包压缩
    configCompressPlugin(viteEnv.VITE_COMPRESSION),

    // 打包分析
    lifecycle === 'build'
      ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
      : null,
  ]
}
