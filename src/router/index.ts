import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './utils'
import { getToken } from '@/utils/auth'
import { useLogin } from '@/hooks/useLogin'
import NProgress from '@/utils/nprogress'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// TODO: 封装路由守卫和路由拦截器
const WHITE_LIST = ['/login', '/404']
router.beforeEach(async (to: ToRouteType, from, next) => {
  const token = getToken()
  NProgress.start()
  //  有 token 的操作
  if (token) {
    // 有 token 跳转 login 不让跳转
    if (to.path === '/login') {
      next({ path: from.fullPath })
    }
    else {
      const { user, getUserInfo, logout } = useLogin()
      if (user.value && user.value.id) {
        // 有用户信息 放行
        next()
      }
      else {
        await getUserInfo().catch((error) => {
          logout()
          return message(error.message || '获取用户信息失败')
        })

        next({ ...to, replace: true })
      }
    }
  }
  // 没有 token 则只能跳转白名单路由
  else {
    if (WHITE_LIST.includes(to.path))
      next()
    else
      next({ path: '/login' })
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
