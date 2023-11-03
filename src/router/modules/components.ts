import { components } from '@/router/enums'

export default {
  path: '/components',
  redirect: '/components/message',
  meta: {
    title: 'Components',
    icon: 'i-carbon:list-boxes',
    rank: components,
  },
  children: [
    {
      path: '/components/message',
      name: 'Message',
      component: () => import('@/views/components/Message.vue'),
      meta: {
        title: 'Message',
      },
    },
    {
      path: '/components/dialog',
      name: 'Dialog',
      component: () => import('@/views/components/Dialog.vue'),
      meta: {
        title: 'Dialog',
      },
    },
    {
      path: '/components/typeit',
      name: 'TypeIt',
      component: () => import('@/views/components/TypeItDemo.vue'),
      meta: {
        title: '打字机组件',
      },
    },
    {
      path: '/components/video',
      name: 'Video',
      component: () => import('@/views/components/Video.vue'),
      meta: {
        title: 'Video',
        showLink: false,
      },
    },
  ],
} as RouteConfigsTable
