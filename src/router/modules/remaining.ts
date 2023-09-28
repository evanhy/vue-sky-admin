import { playgroud } from '@/router/enums'

export default {
  path: '/playground',
  name: 'Playground',
  component: () => import('@/views/Playground/index.vue'),
  meta: {
    title: 'Playground',
    icon: 'i-carbon:game-console',
    rank: playgroud,
  },
} as RouteConfigsTable
