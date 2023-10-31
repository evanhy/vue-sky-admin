/**
 * 存储选项的接口。
 * @interface
 */
interface StorageOptions {
  prefixKey: string // 存储键名前缀
  storage: Storage // 存储对象（localStorage 或 sessionStorage）
}

/**
 * 存储的数据结构接口。
 * @interface
 * @template T - 存储的值的类型，默认为 any。
 */
interface StoredData<T = any> {
  value: T // 存储的值
  time: number // 存储时间戳
  expire: number | null // 过期时间（毫秒），如果为 null，则表示不过期
}

/**
 * 存储管理器类，用于操作本地存储或会话存储。
 * @author EvanSky
 * @class
 * @template T - 存储的值的类型，默认为 any。
 */
class StorageManager<T = any> {
  private storage: Storage
  private prefixKey: string

  /**
   * 创建一个存储管理器实例。
   * @constructor
   * @param option - 存储选项。
   */
  constructor(option: StorageOptions) {
    this.storage = option.storage
    this.prefixKey = option.prefixKey
  }

  /**
   * 获取完整的存储键名，包括前缀。
   * @private
   * @param key - 存储键名。
   * @returns 包含前缀的存储键名。
   */
  private getKey(key: string): string {
    return `${this.prefixKey}${key}`.toUpperCase()
  }

  /**
   * 将数据存储到本地存储或会话存储中。
   * @public
   * @param key - 存储键名。
   * @param value - 要存储的值。
   * @param [expire] - 过期时间（秒），如果未提供则不过期。
   */
  public set(key: string, value: T, expire?: number): void {
    const stringData = JSON.stringify({
      value,
      time: Date.now(),
      expire: expire !== undefined ? new Date().getTime() + expire * 1000 : null,
    })
    this.storage.setItem(this.getKey(key), stringData)
  }

  /**
   * 从存储中获取指定键名的值。
   * @public
   * @param key - 存储键名。
   * @returns 存储的值，如果不存在则返回 null。
   */
  public get(key: string): T | null {
    const item = this.getItem(key)
    return item ? item.value : null
  }

  /**
   * 从存储中获取指定键名的完整数据结构。
   * @public
   * @param key - 存储键名。
   * @param [def] - 默认值，如果存储中不存在数据则返回此默认值。
   * @returns 存储的完整数据结构，如果不存在或已过期则返回默认值。
   */
  public getItem(key: string, def: StoredData<T> | null = null): StoredData<T> | null {
    const val = this.storage.getItem(this.getKey(key))
    if (!val)
      return def
    try {
      const data: StoredData<T> = JSON.parse(val)
      if (data.expire === null || data.expire > new Date().getTime())
        return data
      this.remove(key)
      return def
    }
    catch (error) {
      this.remove(key)
      return def
    }
  }

  /**
   * 从存储中移除指定键名的数据。
   * @public
   * @param key - 存储键名。
   */
  public remove(key: string): void {
    this.storage.removeItem(this.getKey(key))
  }

  /**
   * 清空存储中的所有数据。
   * @public
   */
  public clear(): void {
    this.storage.clear()
  }
}

/**
 * 创建一个存储管理器实例。
 * @function createStorage
 * @author EvanSky
 * @template T - 存储的值的类型，默认为 any。
 * @param [option] - 存储选项。
 * @param [option.prefixKey] - 用于在存储键名前添加的前缀。
 * @param [option.storage] - 存储对象（localStorage 或 sessionStorage）。
 * @returns 存储管理器实例。
 */
export function createStorage<T = any>({ prefixKey = '', storage = sessionStorage }: Partial<StorageOptions> = {}): StorageManager<T> {
  return new StorageManager<T>({ prefixKey, storage })
}
