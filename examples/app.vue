<template>
  <xh-button type="warning" size="small">启动测试</xh-button>
  <XhInput v-model="inputValue" prefix-icon="right-circle-fill"></XhInput>
  <XhLink type="primary">hhhh</XhLink>
  <XhTag type="warning">成功</XhTag>
  <!-- <xh-icon name="right-circle-fill" /> -->
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  XhButton,
  XhIcon,
  XhInput,
  XhMessage,
  XhLink,
  XhTag,
} from '@xhir-ui/components'

const inputValue = ref<string>('')
XhMessage({
  type: 'warning',
  message: '警告',
  duration: 2000,
  showClose: true,
})
</script>
