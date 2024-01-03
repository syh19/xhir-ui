<template>
  <button :class="classComptued"><slot></slot></button>
</template>

<script lang="ts" setup>
import './style/index.scss'
import type { buttonProps } from './types'
import { computed, defineProps } from 'vue'

// defineOptions({
//   name: 'XhButton',
// })

// const props = defineProps<buttonProps>()
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  // medium small mini
  size: {
    type: String,
    default: 'normal',
  },
})
const classComptued = computed(() => {
  const { type, size } = props
  return ['xh-button', type && `xh-button--${type}`, size && `xh-button--${size}`]
})
</script>
