import axios from 'axios'
import { reqReject, reqResolve, resReject, resResolve } from './interceptors'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  // 请求拦截器
  service.interceptors.request.use(reqResolve, reqReject)
  // 响应拦截器
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const request = createAxios()

export const requestTest = createAxios({
  baseURL: import.meta.env.VITE_APP_BASE_API_TEST,
})
