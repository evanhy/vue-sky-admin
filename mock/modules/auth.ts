import { resolveToken } from '../utils'

interface Token {
  admin: string
  editor: string
}

const token: Token = {
  admin: 'admin',
  editor: 'editor',
}

interface ApiResponse {
  code: number
  data?: {
    token: string
  }
  message?: string
}

interface RequestBody {
  username: 'admin' | 'editor'
}

interface RequestHeaders {
  authorization?: string
}

interface Route {
  url: string
  method: 'post'
  response: (args: { body: RequestBody; headers: RequestHeaders }) => ApiResponse
}

const routes: Route[] = [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }: { body: RequestBody }) => {
      if (['admin', 'editor'].includes(body.username || '')) {
        return {
          code: 200,
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
        data: {
          token: resolveToken(headers?.authorization || ''),
        },
      }
    },
  },
]

export default routes
