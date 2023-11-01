import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 请求白名单
const whiteList = ['/auth/login', '/auth/refreshToken']

// 请求拦截器 - 处理请求数据
export function reqResolve(config: InternalAxiosRequestConfig) {
  // 防止缓存，给get请求加上时间戳
  if (config.method === 'get')
    config.params = { ...config.params, t: new Date().getTime() }

  // 白名单不需要token
  if (whiteList.some(v => config.url!.includes(v))) {
    return config
  }
  else {
    const token = getToken()
    if (!token)
      return Promise.reject({ code: 401, message: '登录已过期，请重新登录！' })

    /**
     * 加上 token
     * ! 认证方案: JWT Bearer
     */
    config.headers.Authorization = config.headers.Authorization || `Bearer ${token}`
    return config
  }
}

// 请求拦截器 - 处理请求错误
export function reqReject(error: any) {
  return Promise.reject(error)
}

// 响应拦截器 - 处理响应数据
export function resResolve(response: AxiosResponse) {
  const { data, status, statusText } = response
  if (data?.code !== 200) {
    const code = data?.code ?? status
    const messageTxt = resolveResError(code, data?.message ?? statusText)

    message(messageTxt, { type: 'error' })
    return Promise.reject({ code, message: messageTxt, error: data || response })
  }
  return Promise.resolve(data)
}

// 响应拦截器 - 处理响应错误
export function resReject(error: any) {
  if (!error || !error.response) {
    const code = error.code ?? 500
    const messageTxt = resolveResError(code, error.message)
    message(messageTxt, { type: 'error' })
    return Promise.reject({ code, message: messageTxt, error })
  }
  const { data, status } = error.response
  const code = data?.code ?? status
  const messageTxt = data?.message ?? resolveResError(code, data?.message)
  message(messageTxt, { type: 'error' })

  return Promise.resolve({ code, message: messageTxt, error: error.response?.data || error.response })
}

function resolveResError(code: number, message: string) {
  switch (code) {
    case 400:
      message = message ?? '请求参数错误'
      break
    case 401:
      message = message ?? '登录已过期'
      useLogin().logout()
      break
    case 403:
      message = message ?? '没有权限'
      break
    case 404:
      message = message ?? '资源或接口不存在'
      break
    case 500:
      message = message ?? '服务器异常'
      break
    default:
      message = message ?? `【${code}】: 未知异常!`
      break
  }
  return message
}
