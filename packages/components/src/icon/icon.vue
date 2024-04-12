<template>
  <svg class="xh-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import './font/iconfont.js'
import './style/index.scss'
const props = defineProps({
  name: {
    type: String,
  },
})

const iconName = computed(() => {
  return `#xh-icon--${props.name}`
})
</script>
