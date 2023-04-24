<script setup lang="ts">
import { defineComponent, h } from 'vue'
import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'

import Header from './header.vue'
import Footer from './footer.vue'

import { useAppStore, useLayoutStore } from '@/store'

import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()

const appStore = useAppStore()
const layoutStore = useLayoutStore()
document.body.addEventListener('keydown', logKey)
function logKey(e: any) {
  if (e.code === 'KeyT')
    appStore.toggleTheme()

  if (e.code === 'KeyH')
    layoutStore.toglleHidder()
}

function registerNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  setup() {
    registerNaiveTools()
  },
  render() {
    return h('div')
  },
})
</script>

<template>
  <NConfigProvider class="h-full" :theme="theme" :theme-overrides="themeOverrides" :locale="language">
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <Header />
            <slot />
            <Footer />
            <NaiveProviderContent />
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
