import { resolveToken } from '../utils'

interface RequestHeaders {
  authorization?: string
}

const users: Record<string, any> = {
  admin: {
    id: 1,
    name: 'admin',
    avatar: 'https://pic.imgdb.cn/item/6540a398c458853aef19bbf5.jpg',
    email: 'Ronnie@123.com',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'editor',
    avatar: 'https://pic.imgdb.cn/item/6540a398c458853aef19bbf5.jpg',
    email: 'Ronnie@123.com',
    role: ['editor'],
  },
  guest: {
    id: 3,
    name: 'guest',
    avatar: 'https://pic.imgdb.cn/item/6540a398c458853aef19bbf5.jpg',
    role: [],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }: { headers: RequestHeaders }) => {
      const token = resolveToken(headers?.authorization) || 'guest'
      return {
        code: 200,
        message: 'success',
        data: {
          ...(users[token] || users.guest),
        },
      }
    },
  },
]
