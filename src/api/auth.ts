/* 登录接口参数类型 */
import type { BaseResult } from '@/utils/http/types'

export interface LoginData {
  username: string
  password: string
}

/* 登录接口返回值类型 */
export interface LoginRes {
  token: string
}

/* 用户信息接口返回值类型 */
export interface UserInfoRes {
  id: string
  username: string
  avatar: string
  description: string
}

export const fetchLogin = (data: LoginData) => {
  return http.request<BaseResult<LoginRes>>('post', '/auth/login', { data })
}

export const refreshToken = () => {
  return http.request('post', '/auth/refreshToken')
}
