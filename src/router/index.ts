import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// TODO: 封装路由守卫和路由拦截器

export default router
