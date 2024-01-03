export const inputProps = {
  prefixIcon: {
    type: String,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入内容',
  },
}

export const inputEmits = {
  /**
   * update:modelValue 是 Vue 3 中的一个语法糖
   * 在子组件中，当需要更新父组件传递的 modelValue 属性时，可以通过触发 update:modelValue 事件来实现。
   * 在父组件中，你可以使用 v-model 指令来监听 update:modelValue 事件，并更新相应的数据.
   * 当 XhInput 组件的输入值改变时，它会触发 update:modelValue 事件，父组件通过 v-model 指令监听这个事件，并更新 inputValue 数据。
   * @param value
   * @returns
   */
  'update:modelValue': (value: string) => value,
  input: (value: string) => value,

  /**
   * @description 在这个函数中，evt: Event 表示参数 evt 的类型应该是 Event。箭头 => 后面的部分是函数的主体，evt instanceof Event 是一个表达式，它会返回一个布尔值，表示 evt 是否是 Event 的实例。
   * @param evt
   * @returns 布尔值
   */
  blur: (evt: Event) => evt instanceof Event,
  // 解释下面这句话啥作用
  focus: (evt: Event) => evt instanceof Event,
}
