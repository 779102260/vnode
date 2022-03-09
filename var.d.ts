// 对象
declare type PlainObject = Record<string, any>
// 数组
declare type PlainArray = any[]
// 对象、数组
declare type PlainObjectOrArray = PlainObject | PlainArray
// 任意类
interface AnyClass {
  new (...args: any[])
}
// 任意函数
interface AnyFunction {
  (...args: any[]): any
  [key: string]: any
}

type PartialKeys<T, U extends keyof T> = {
  [K in U]?: T[K]
} & {
  [K in Exclude<keyof T, U>]: T[K]
}
