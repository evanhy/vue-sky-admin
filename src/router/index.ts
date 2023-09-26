import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
