/* 服务器返回数据的的类型，根据接口文档确定 */
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios'

export interface BaseResult<T = any> {
  code: number
  message: string
  data: T
}

export interface resultType {
  accessToken?: string
}

export type RequestMethods = Extract<
  Method,
  'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'
>

export interface SkyHttpError extends AxiosError {
  isCancelRequest?: boolean
}

export interface SkyHttpResponse extends AxiosResponse {
  config: SkyHttpRequestConfig
}

export interface SkyHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: SkyHttpRequestConfig) => void
  beforeResponseCallback?: (response: SkyHttpResponse) => void
}
