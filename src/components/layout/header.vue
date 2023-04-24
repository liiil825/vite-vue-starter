<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()

const { t } = useI18n() // use as global scope
</script>

<template>
  <header v-if="!layoutStore.hidden">
    <h1>{{ t('hello') }} ChatGPT</h1>
  </header>
</template>

<style>
/* Style for the header */
header {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid white;
}
</style>

<i18n lang="yaml" global>
en-US:
  hello: Hello!

zh-CN:
  hello: 你好
</i18n>
