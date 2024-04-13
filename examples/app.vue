<template>
  <xh-button type="warning" size="small">启动测试</xh-button>
  <XhInput v-model="inputValue" prefix-icon="book"></XhInput>
  <XhLink type="primary">hhhh</XhLink>
  <XhTag type="warning">成功</XhTag>
  <XhIcon name="right-circle-fill" />
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { XhButton, XhIcon, XhInput, XhMessage, XhLink, XhTag } from 'xhir-ui'

const inputValue = ref<string>('')
XhMessage({
  type: 'warning',
  message: '警告',
  duration: 2000,
  showClose: true,
})
</script>
