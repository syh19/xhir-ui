<template>
  <xh-button type="warning" size="small">启动测试</xh-button>
  <XhInput v-model="inputValue" prefix-icon="right-circle-fill"></XhInput>
  <!-- <xh-icon name="right-circle-fill" /> -->
  <XhMessage text="哈哈哈哈"></XhMessage>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { XhButton, XhIcon, XhInput, XhMessage } from 'xhir-ui'

const inputValue = ref<string>('')
</script>
