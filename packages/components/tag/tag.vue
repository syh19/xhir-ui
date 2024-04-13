<template>
  <div v-bind="attrs" class="xh-tag" :class="styleClass">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, useAttrs, computed } from 'vue'
import './style/index.scss'
import { tagProps } from './types'

export default defineComponent({
  name: 'xh-link',
  props: tagProps,
  setup(props) {
    const attrs = useAttrs()
    const styleClass = computed(() => {
      return {
        [`xh-tag--${props.type}`]: props.type,
      }
    })
    return {
      attrs,
      styleClass,
    }
  },
})
</script>
