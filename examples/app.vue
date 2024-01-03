<template>
  <xh-button type="warning" size="small">启动测试</xh-button>
  <XhInput v-model="inputValue" prefix-icon="right-circle-fill" clearable></XhInput>
  <!-- <xh-icon name="right-circle-fill" /> -->
</template>
<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { XhButton, XhIcon, XhInput } from 'xhir-ui'

const inputValue = ref<string>('')
</script>
