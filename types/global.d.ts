import type {
  FunctionalComponent,
} from 'vue'

import { type RouteComponent } from 'vue-router'

/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
  /**
   * @description 整体路由配置表（包括完整子路由）
   */
  interface RouteConfigsTable {
    /** 路由地址 `必填` */
    path: string
    /** 路由名字（保持唯一）`可选` */
    name?: string
    /** `Layout`组件 `可选` */
    component?: RouteComponent
    /** 路由重定向 `可选` */
    redirect?: string
    meta?: {
      /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加）`必填` */
      title: string
      /** 菜单图标 `可选` */
      icon?: string | FunctionalComponent
      /** 是否在菜单中显示（默认`true`）`可选` */
      showLink?: boolean
      /** 菜单升序排序，值越高排的越后（只针对顶级路由）`可选` */
      rank?: number
    }
    /** 子路由配置项 */
    children?: Array<RouteChildrenConfigsTable>
  }

  /**
   * @description 完整子路由配置表
   */
  interface RouteChildrenConfigsTable {
    /** 子路由地址 `必填` */
    path: string
    /** 路由名字（对应不要重复，和当前组件的`name`保持一致）`必填` */
    name?: string
    /** 路由重定向 `可选` */
    redirect?: string
    /** 按需加载组件 `可选` */
    component?: RouteComponent
    meta?: {
      /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加） `必填` */
      title: string
      /** 菜单图标 `可选` */
      icon?: string | FunctionalComponent
      /** 菜单名称右侧的额外图标 */
      extraIcon?: string | FunctionalComponent
      /** 是否在菜单中显示（默认`true`）`可选` */
      showLink?: boolean
      /** 是否显示父级菜单 `可选` */
      showParent?: boolean
      /** 页面级别权限设置 `可选` */
      roles?: Array<string>
      /** 按钮级别权限设置 `可选` */
      auths?: Array<string>
      /** 路由组件缓存（开启 `true`、关闭 `false`）`可选` */
      keepAlive?: boolean
      /** 内嵌的`iframe`链接 `可选` */
      frameSrc?: string
      /** `iframe`页是否开启首次加载动画（默认`true`）`可选` */
      frameLoading?: boolean
      /** 页面加载动画（有两种形式，一种直接采用vue内置的`transitions`动画，另一种是使用`animate.css`写进、离场动画）`可选` */
      transition?: {
        /**
         * @description 当前路由动画效果
         * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
         * @see animate.css {@link https://animate.style}
         */
        name?: string
        /** 进场动画 */
        enterTransition?: string
        /** 离场动画 */
        leaveTransition?: string
      }
      // 是否不添加信息到标签页，（默认`false`）
      hiddenTag?: boolean
      /** 动态路由可打开的最大数量 `可选` */
      dynamicLevel?: number
      rank?: number
    }
    /** 子路由配置项 */
    children?: Array<RouteChildrenConfigsTable>
  }

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
    // proxy代理配置
    VITE_PROXY: [string, string][]
    // baseApi
    VITE_APP_BASE_API: string
    // baseApiTest
    VITE_APP_BASE_API_TEST: string
    // 是否使用mock
    VITE_APP_USE_MOCK: boolean
  }
}
