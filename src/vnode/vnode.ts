/**
 * VNode
 */
export default class VNode {
  constructor(
    public tag?: string,
    public attrs?: Record<string, any>,
    public chilren?: VNode[],
    public text?: string,
    public isComment: boolean = false
  ) {}
}

export * from './createVNode'
export * from './toDom'
