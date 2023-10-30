/// <reference types="vitest" />

import path from 'node:path'
import type { ConfigEnv, UserConfigExport } from 'vite'
import { loadEnv } from 'vite'
import { getPluginsList } from './build/unplugin'
import { warpperEnv } from './build'

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd()

// TODO: Vite 配置
// https://github.com/pure-admin/vue-pure-admin/blob/main/vite.config.ts
// https://github.com/KYX1234/Element-Admin/blob/master/vite.config.ts
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const { VITE_PORT } = warpperEnv(loadEnv(mode, root))

  return {
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, './src')}/`,
      },
    },
    server: {
      https: false,
      port: VITE_PORT,
      host: '0.0.0.0',
      proxy: {},
    },
    plugins: getPluginsList(command),

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
}
