/**
 * 判断是否是函数
 * @param val 任意值
 * @returns 是否是函数
 * @example
 * isFunction(() => {}) // true
 * isFunction('') // false
 */
export const isFunction = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Function]'
}
