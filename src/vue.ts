import { createElement, createText, toDom } from './vnode/vnode'
// 类型
import type VNode from './vnode/vnode'
import type { ICreateElement, ICreateText } from './vnode/vnode'

interface IOptions {
  el: HTMLElement
  render: (createElement: ICreateElement, createText: ICreateText) => VNode
}

export default class Vue {
  vnode: VNode
  constructor(public options: IOptions) {
    // 创建vnode
    const vnode = this.buildVNode()
    // 渲染
    const dom = toDom(vnode)
    // 挂载
    this.mount(dom)
  }
  buildVNode() {
    const { render } = this.options
    return render(createElement, createText)
  }
  mount(dom: HTMLElement | Comment) {
    const { el } = this.options
    el.appendChild(dom)
  }
}
