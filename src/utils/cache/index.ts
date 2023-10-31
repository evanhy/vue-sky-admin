import { createStorage } from './storage'

const prefixKey = 'Vue_Sky_Admin_'

/**
 * 创建一个本地存储（localStorage）工具对象。
 * @param option - 选项对象。
 * @param [option.prefixKey] - 用于在存储键名前添加的前缀。
 * @returns 本地存储工具对象
 */
export const createLocalStorage = function (option: { prefixKey?: string } = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage,
  })
}

/**
 * 创建一个会话存储（sessionStorage）工具对象。
 * @param option - 选项对象。
 * @param [option.prefixKey] - 用于在存储键名前添加的前缀。
 * @returns 会话存储工具对象。
 */
export const createSessionStorage = function (option: { prefixKey?: string } = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage,
  })
}

/**
 * 本地存储（localStorage）工具对象。
 */
export const lStorage = createLocalStorage({ prefixKey })

/**
 * 会话存储（sessionStorage）工具对象。
 */
export const sStorage = createSessionStorage({ prefixKey })
