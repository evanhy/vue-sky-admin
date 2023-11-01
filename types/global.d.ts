/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
  /**
   * 打包压缩格式的类型声明
   */
  type ViteCompression =
    | 'none'
    | 'gzip'
    | 'brotli'
    | 'both'
    | 'gzip-clear'
    | 'brotli-clear'
    | 'both-clear'

  /**
   * 全局自定义环境变量的类型声明
   * @see {@link https://yiming_chang.gitee.io/pure-admin-doc/pages/config/#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE}
   */
  interface ViteEnv {
    // 本地运行端口号
    VITE_PORT: number
    // 项目部署基础路径
    VITE_PUBLIC_PATH: string
    // 路由模式
    VITE_ROUTER_HISTORY: string
    // 是否启用CDN
    VITE_CDN: boolean
    // 是否启用Gzip压缩
    VITE_COMPRESSION: ViteCompression
    // baseApi
    VITE_APP_BASE_API: string
    // baseApiTest
    VITE_APP_BASE_API_TEST: string
    // 是否使用mock
    VITE_APP_USE_MOCK: boolean
    // 是否使用代理
    VITE_USE_PROXY: boolean
  }
}
