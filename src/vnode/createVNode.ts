import VNode from './vnode'

/**
 * 创建标签vnode
 * @param tag
 * @param attrs
 * @param chilren
 * @returns
 */
export function createElement(
  tag: VNode['tag'],
  attrs: VNode['attrs'],
  chilren?: VNode['chilren']
) {
  return new VNode(tag, attrs, chilren)
}

/**
 * 创建文本vnode
 * @param text
 * @returns
 */
export function createText(text: VNode['text']) {
  return new VNode(null, null, null, text)
}

/**
 * 创建注释vnode
 * @param text
 * @returns
 */
export function createComment(text: VNode['text']) {
  return new VNode(null, null, null, text, true)
}

// 导出类型
export type ICreateElement = typeof createElement
export type ICreateText = typeof createText
