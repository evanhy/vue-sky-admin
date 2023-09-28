export default [

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/components/404.vue'),
  },
] as RouteConfigsTable[]
