<template>
  <Transition name="down">
    <div :class="classComptued">
      <xh-icon :name="iconNameMap[type]" class="xh-message--prefix" />
      <span>{{ props.message }}</span>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import './style/index.scss'
import { messageProps } from './message'
import XhIcon from '../icon'
import { computed, onMounted, reactive, ref } from 'vue'

const props = defineProps(messageProps)
const iconNameMap = reactive<{ [type: string]: string }>({
  success: 'check-circle-fill',
  warning: 'warning-circle-fill',
})

const classComptued = computed(() => {
  const { type, iconName, showClose, duration } = props
  console.log('入参', props)
  return ['xh-message', type && `xh-message--${type}`]
})
</script>
