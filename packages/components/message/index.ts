import messageComp from './message.vue'
import { withInstallFunction } from '@xhir-ui/utils'
import { h, render } from 'vue'


const messageFun = (options: any) => {
  const divContainer = document.createElement('div') as HTMLDivElement
  divContainer.classList.add('xh-message-container')
  document.body.appendChild(divContainer)
  const { type, message, iconName, showClose, duration } = options
  const vNode = h(messageComp, {
    type,
    message,
    iconName,
    showClose,
    duration,
  })
  render(vNode, divContainer)

  setTimeout(() => {
    divContainer.remove()
  }, duration)
}

// ['success', 'error', 'info', 'warning'].forEach((type) => {
//   (messageFun as any)[type] = (options: any) => {
//     if (typeof options === 'string') {
//       options = {
//         text: options,
//       }
//     }
//     options.type = type
//     return messageFun(options)
//   }
// })

export const XhMessage = withInstallFunction(messageFun, '$message')
export default XhMessage
