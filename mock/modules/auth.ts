import type { MockMethod } from 'vite-plugin-mock'
import { resolveToken } from '../utils'

interface Token {
  admin: string
  editor: string
}

const token: Token = {
  admin: 'admin',
  editor: 'editor',
}

interface RequestBody {
  username: 'admin' | 'editor'
}

interface RequestHeaders {
  authorization?: string
}

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }: { body: RequestBody }) => {
      if (['admin', 'editor'].includes(body.username || '')) {
        return {
          code: 200,
          message: 'success',
          data: {
            token: token[body.username],
          },
        }
      }
      else {
        return {
          code: -1,
          message: '没有此用户',
        }
      }
    },
  },
  {
    url: '/api/auth/refreshToken',
    method: 'post',
    response: ({ headers }: { headers?: RequestHeaders }) => {
      return {
        code: 200,
        message: 'success',
        data: {
          token: resolveToken(headers?.authorization || ''),
        },
      }
    },
  },
] as MockMethod[]
