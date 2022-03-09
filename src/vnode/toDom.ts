import type VNode from './vnode'

/**
 * 将VNode转为dom
 * @param vnode
 * @returns
 */
export function toDom(vnode: VNode) {
  const { tag, isComment } = vnode
  if (tag) {
    return toElementDom(vnode)
  }
  if (isComment) {
    return toCommentDom(vnode)
  }
  return toTextDom(vnode)
}

/**
 * 转为标签
 * @param param0
 * @returns
 */
function toElementDom({ tag, attrs, chilren }: VNode) {
  const ele = document.createElement(tag)
  // 设置属性
  for (const key in attrs) {
    if (!Object.prototype.isPrototypeOf.call(attrs, key)) {
      continue
    }
    ele.setAttribute(key, attrs[key])
  }
  // 插入子节点
  for (const child of chilren) {
    const dom = toDom(child)
    ele.appendChild(dom)
  }
  return ele
}

/**
 * 转为注释
 * @param param0
 * @returns
 */
function toCommentDom({ text }: VNode) {
  return document.createComment(text)
}

/**
 * 转为文本
 * @param param0
 * @returns
 */
function toTextDom({ text }: VNode) {
  return document.createTextNode(text)
}
