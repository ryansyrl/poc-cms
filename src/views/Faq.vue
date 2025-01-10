<script lang="ts" setup>
import { h } from 'vue'

function render() {
  return h('div', ['hello', h('span', ['world', h('span', '!!!')])])
}
</script>

<template>
  <render />
</template>
