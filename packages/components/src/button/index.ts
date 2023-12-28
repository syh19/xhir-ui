/**
 * 大多数情况下在vue中使用一个组件会通过 app.use()函数 将组件挂载到全局。要使用 app.use()函数 的话我们需要让每个组件都提供一个install方法，app.use() 的时候就会调用这个方法；
 *
 * #todo withInstall方法可以做个公共方法放到工具库里，因为后续每个组件都会用到
 */

import button from './button.vue'
import type { App, Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    // 注册组件
    app.component((comp as any).name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
const Button = withInstall(button)

export default Button
