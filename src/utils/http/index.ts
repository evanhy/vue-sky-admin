import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reqReject, reqResolve, resReject, resResolve } from './interceptors'
import type { RequestMethods, SkyHttpRequestConfig } from './types'

// export function createAxios(options = {}) {
//   const defaultOptions = {
//     baseURL: import.meta.env.VITE_APP_BASE_API,
//     timeout: 12000,
//   }
//   const service = axios.create({
//     ...defaultOptions,
//     ...options,
//   })
//   // 请求拦截器
//   service.interceptors.request.use(reqResolve, reqReject)
//   // 响应拦截器
//   service.interceptors.response.use(resResolve, resReject)
//
//   return service
// }
//
// export const request = createAxios()
//
// export const requestTest = createAxios({
//   baseURL: import.meta.env.VITE_APP_BASE_API_TEST,
// })

// 相关配置请参考：http://www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 请求超时时间 2分钟
  timeout: 1000 * 60 * 2,
}

class SkyHttp {
  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = axios.create(defaultConfig)

  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: SkyHttpRequestConfig,
  ): Promise<T> {
    const config: SkyHttpRequestConfig = {
      method,
      url,
      ...param,
      ...axiosConfig,
    } as SkyHttpRequestConfig

    // 单独处理自定义请求/响应回调
    return new Promise((resolve, reject) => {
      SkyHttp.axiosInstance
        .request(config)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /** 抽离 post */
  public post<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: SkyHttpRequestConfig,
  ): Promise<P> {
    return this.request<P>('post', url, params, config)
  }

  /** 抽离 get */
  public get<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: SkyHttpRequestConfig,
  ): Promise<P> {
    return this.request<P>('get', url, params, config)
  }

  /** 请求拦截 */
  private httpInterceptorsRequest(): void {
    SkyHttp.axiosInstance.interceptors.request.use(reqResolve, reqReject)
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(): void {
    SkyHttp.axiosInstance.interceptors.response.use(resResolve, resReject)
  }
}

export const http = new SkyHttp()
