<script setup lang="ts">
import { NButton, useDialog, useMessage } from 'naive-ui'
import { t } from '@/i18n'

const dialog = useDialog()
const message = useMessage()
function handleConfirm() {
  dialog.warning({
    title: t('chat.clearChatConfirm'),
    positiveText: t('common.confirm'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      message.success(t('common.yes'))
    },
    onNegativeClick: () => {
      message.error(t('common.no'))
    },
  })
}
</script>

<template>
  <div class="card">
    <NButton type="primary" @click="handleConfirm">
      {{ t('chat.clearChatConfirm') }}
    </NButton>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>
