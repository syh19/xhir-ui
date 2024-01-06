<template>
  <xh-button type="warning" size="small">启动测试</xh-button>
  <XhInput v-model="inputValue" prefix-icon="right-circle-fill"></XhInput>
  <!-- <xh-icon name="right-circle-fill" /> -->
</template>
<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { XhButton, XhIcon, XhInput, XhMessage } from 'xhir-ui'

const inputValue = ref<string>('')
XhMessage({
  type: 'warning',
  message: '警告',
  duration: 2000,
  showClose: true,
})
</script>
