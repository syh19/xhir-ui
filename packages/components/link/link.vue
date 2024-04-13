<template>
  <a v-bind="attrs" class="xh-link" :class="styleClass">
    <slot />
  </a>
</template>
<script lang="ts">
import './style/index.scss'
import { linkProps } from './types'
import { defineComponent, useAttrs, computed } from 'vue'
export default defineComponent({
  name: 'xh-link',
  props: linkProps,
  setup(props) {
    const attrs = useAttrs()
    const styleClass = computed(() => {
      return {
        [`xh-link--${props.type}`]: props.type,
        'is-disabled': props.disabled,
        'is-underline': props.underline,
      }
    })
    return {
      attrs,
      styleClass,
    }
  },
})
</script>
