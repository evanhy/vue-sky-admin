export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/components/404.vue'),
  },
]
