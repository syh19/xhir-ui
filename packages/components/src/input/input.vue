<template>
  <div class="xh-input">
    <xh-icon v-if="prefixIcon" :name="prefixIcon" />
    <input
      class="xh-input--inner"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />
    <xh-icon
      class="xh-input--prefix"
      v-if="clearable"
      v-show="modelValue"
      name="close-circle"
    />
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss'
import { computed } from 'vue'
import XhIcon from '../icon'
import { inputProps, inputEmits } from './input'

const props = defineProps(inputProps)

const emits = defineEmits(inputEmits)

/**
 * 当 XhInput 组件的输入值改变时，它会触发 update:modelValue 事件，父组件通过 v-model 指令监听这个事件，并更新 inputValue 数据。
 */
const handleInput = (e: any) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
