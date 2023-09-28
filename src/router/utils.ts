// 静态路由
import staticRoutes from './modules/index'

const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.ts', '!./modules/**/index.ts'],
  {
    eager: true,
  },
)

// 动态路由
// TODO: 暂未写动态路由,现在就是直接读取
const dynamicRoutes = [] as any[]

Object.keys(modules).forEach((key) => {
  dynamicRoutes.push(modules[key].default)
})

// 将 动态路由 dynamicRoutes 处理成菜单渲染所需的格式
// 如果没有 children 就直接显示在菜单上
const constantMenus = [] as any[]
// 处理函数
function handleDynamicRoutes(routes: any[]) {
  routes.forEach((route) => {
    if (route.children) {
      route.children = route.children.filter((child: any) => !child.meta?.showLink)
      if (route.children.length === 0)
        constantMenus.push(route)
      else if (route.children.length === 1)
        constantMenus.push(route.children[0])
      else
        constantMenus.push(route)
    }
    else { constantMenus.push(route) }
  })
}

handleDynamicRoutes(dynamicRoutes)
// 合并 静态路由 和 动态路由
const routes = staticRoutes.concat(dynamicRoutes) as any[]

export {
  routes,
  constantMenus,
}
