export default {
  path: '/playground',
  name: 'Playground',
  component: () => import('@/views/Playground/index.vue'),
  meta: {
    title: 'Playground',
  },
} as RouteConfigsTable
