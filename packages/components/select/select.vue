<template>
  <a v-bind="attrs" class="xh-link" :class="styleClass">
    <slot />
  </a>
</template>
<script setup lang="ts">
import './style/index.scss'
import { LinkProps } from './types'
import { useAttrs, computed } from 'vue'
const props = defineProps<LinkProps>()
const attrs = useAttrs()
const styleClass = computed(() => {
  return {
    [`xh-link--${props.type}`]: props.type,
    'is-disabled': props.disabled,
    'is-underline': props.underline,
  }
})
</script>
