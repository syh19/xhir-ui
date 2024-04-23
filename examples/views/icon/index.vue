<template>
  <XhIcon v-for="icon in iconJSON.glyphs" :key="icon.name" :name="icon.name" />
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { XhIcon } from 'xhir-ui'
import iconJSON from './iconfont.json'
console.log(iconJSON)
</script>
