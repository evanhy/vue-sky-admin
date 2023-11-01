import type { BaseResult } from '@/utils/http/types'

export interface UserInfoRes {
  id: number
  name: string
  avatar: string
  email: string
  role: string[]
}

export function getUsers() {
  return http.request<BaseResult<UserInfoRes>>('get', '/user')
}
