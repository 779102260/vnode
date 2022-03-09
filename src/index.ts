import Vue from './vue'

new Vue({
  el: document.querySelector('#root'),
  render(createElement, createText) {
    const button = createElement(
      'button',
      {
        attrs: {
          class: 'cc'
        },
        on: {
          click: () => {
            this.data.a++
          }
        }
      },
      [createText('+')]
    )
    const txt = createText('233')
    return createElement('div', {}, [txt, button])
  }
})
