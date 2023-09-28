export default {
  path: '/',
  component: () => import('@/layout/index.vue'),
  redirect: '/home',
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        title: '首页',
        icon: 'i-carbon:home',
      },
    },
  ],
} as RouteConfigsTable
