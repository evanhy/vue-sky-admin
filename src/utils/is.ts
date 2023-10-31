const toString = Object.prototype.toString

/**
 * 判断类型
 * @param val
 * @param type
 * @returns 返回true/false
 */
export function is(val: any, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * 判断是否定义
 * @param val
 * @returns 返回true/false
 */
export function isDef(val: any) {
  return typeof val !== 'undefined'
}

/**
 * 判断是否未定义
 * @param val
 * @returns 返回true/false
 */
export function isUndef(val: any) {
  return typeof val === 'undefined'
}

/**
 * 判断是否为null
 * @param val
 * @returns 返回true/false
 */
export function isNull(val: any) {
  return val === null
}

/**
 * 判断是否为空字符串
 * @param val
 * @returns 返回true/false
 */
export function isWhitespace(val: any) {
  return val === ''
}

/**
 * 判断是否为对象
 * @param val
 * @returns 返回true/false
 */
export function isObject(val: any) {
  return !isNull(val) && is(val, 'Object')
}

/**
 * 判断是否为数组
 * @param val
 * @returns 返回true/false
 */
export function isArray(val: any) {
  return val && Array.isArray(val)
}

/**
 * 判断是否为字符串
 * @param val
 * @returns 返回true/false
 */
export function isString(val: any) {
  return is(val, 'String')
}

/**
 * 判断是否为数字
 * @param val
 * @returns 返回true/false
 */
export function isNumber(val: any) {
  return is(val, 'Number')
}

/**
 * 判断是否为布尔值
 * @param val
 * @returns 返回true/false
 */
export function isBoolean(val: any) {
  return is(val, 'Boolean')
}

/**
 * 判断是否为日期
 * @param val
 * @returns 返回true/false
 */
export function isDate(val: any) {
  return is(val, 'Date')
}

/**
 * 判断是否为正则表达式
 * @param val
 * @returns 返回true/false
 */
export function isRegExp(val: any) {
  return is(val, 'RegExp')
}

/**
 * 判断是否为函数
 * @param val
 * @returns 返回true/false
 */
export function isFunction(val: any) {
  return typeof val === 'function'
}

/**
 * 判断是否为Promise
 * @param val
 * @returns 返回true/false
 */
export function isPromise(val: any) {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * 判断是否为元素
 * @param val
 * @returns 返回true/false
 */
export function isElement(val: any) {
  return isObject(val) && !!val.tagName
}

/**
 * 判断是否为window
 * @param val
 * @returns 返回true/false
 */
export function isWindow(val: any) {
  return typeof window !== 'undefined' && isDef(window) && is(val, 'Window')
}

/**
 * 判断是否为null或未定义
 * @param val
 * @returns 返回true/false
 */
export function isNullOrUndef(val: any) {
  return isNull(val) || isUndef(val)
}

/**
 * 判断是否为null或未定义或空字符串
 * @param val
 * @returns 返回true/false
 */
export function isNullOrWhitespace(val: any) {
  return isNullOrUndef(val) || isWhitespace(val)
}

/**
 * 判断是否为空
 * @param val
 * @returns 返回true/false
 */
export function isEmpty(val: any) {
  if (isArray(val) || isString(val))
    return val.length === 0

  if (val instanceof Map || val instanceof Set)
    return val.size === 0

  if (isObject(val))
    return Object.keys(val).length === 0

  return false
}

/**
 * 类似mysql的IFNULL函数
 * 第一个参数为null/undefined/'' 则返回第二个参数作为备用值，否则返回第一个参数
 * @param val
 * @param def
 */
export function ifNull(val: any, def = '') {
  return isNullOrWhitespace(val) ? def : val
}

/**
 * 判断是否为url
 * @param path
 * @returns 返回true/false
 */
export function isUrl(path: any) {
  const reg
        = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

/**
 * 判断是否为外部链接
 * @param path
 * @returns 返回true/false
 */
export function isExternal(path: any) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断是否为sever端
 */
export const isServer = typeof window === 'undefined'

/**
 * 判断是否为client端
 */
export const isClient = !isServer
