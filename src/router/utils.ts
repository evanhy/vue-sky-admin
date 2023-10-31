// 静态路由
import staticRoutes from './modules/index'

const moduleFiles: Record<string, any> = import.meta.glob(
  ['./modules/**/*.ts', '!./modules/**/index.ts'],
  {
    eager: true,
  },
)

// 动态路由
// TODO: 暂未写动态路由,现在就是直接读取
let dynamicRoutes = Object.values(moduleFiles).map(m => m.default)

// 处理动态路由
const processDynamicRoutes = () => {
  const rootRouteIndex = dynamicRoutes.findIndex(route => route.path === '/')
  const rootRoute = dynamicRoutes[rootRouteIndex]
  dynamicRoutes = [
    {
      ...rootRoute,
      children: [...rootRoute.children, ...dynamicRoutes.filter(route => route.path !== '/')],
    },
  ]
}

processDynamicRoutes()

/**
 * @description 处理动态路由为菜单格式
 * 1. 如果有子路由
 *  1.1 如果子路由只有一个,则将子路由作为菜单
 *  1.2 如果子路由大于一个,则将父路由作为菜单
 *  1.3 如果子路由没有,则将父路由作为菜单
 *  1.4 如果子路由有 meta.showLink 为 false 的,则将其过滤掉
 * 2. 如果没有子路由,则将父路由作为菜单
 * @param routes 动态路由
 * @return 菜单格式的数组
 */
const handleDynamicRoutes = (routes: any[]) => {
  if (!routes)
    return []
  // 深拷贝一份 routes 避免污染原数据
  const copyRoutes = JSON.parse(JSON.stringify(routes)) as any[]
  // 菜单格式的数组
  const menus = [] as any[]
  copyRoutes.forEach((route) => {
    const hasChildren = route.children && route.children.length > 0
    if (hasChildren) {
      // 如果子路由有 meta.showLink 为 false 的,则将其过滤掉
      route.children = route.children.filter((child: any) => child.meta?.showLink !== false)
      // 如果 showLink 的子路由只有一个,则将父路由作为菜单
      if (route.children.length === 0)
        menus.push(route)

      // 如果 showLink 的子路由只有一个,则将子路由作为菜单
      else if (route.children.length === 1)
        menus.push(route.children[0])

      // 如果 showLink 的子路由大于一个,则将父路由作为菜单,并将子路由作为父路由的子菜单
      else
        menus.push(route)
    }
    else {
      // 没有子路由 则将父路由作为菜单
      menus.push(route)
    }
  })
  // 根据 rank 字段进行升序排序, rank 越大, 排序越靠后
  menus.sort((a, b) => (a.meta?.rank || 0) - (b.meta?.rank || 0))
  return menus
}
// 菜单格式的数组
const constantMenus = handleDynamicRoutes(dynamicRoutes[0].children)

// 合并 静态路由 和 动态路由
const routes = [...staticRoutes, ...dynamicRoutes]
export {
  routes,
  constantMenus,
}
