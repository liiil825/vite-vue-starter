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
  <main>
    <div>
      <section>
        <h2>Functions of ChatGPT</h2>
        <ul>
          <li>Provides intelligent responses to user input and questions.</li>
          <li>Offers personalized recommendations based on user preferences and historical data.</li>
          <li>Can assist in numerous tasks, including scheduling, reminders, and more.</li>
        </ul>
      </section>

      <section>
        <h2>How to Use ChatGPT</h2>
        <ol>
          <li>Type your question or request into the chat box and hit "Enter".</li>
          <li>ChatGPT will analyze your input and provide a response or recommendation.</li>
          <li>If you need further assistance or have additional questions, simply continue the conversation.</li>
        </ol>
      </section>
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
    </div>
  </main>
</template>

<style>
.h-full {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Style for the main content */
main {
  flex: 1;
  max-width: 800px;
  margin: auto;
  /* Centers horizontally */
  display: flex;
  flex-direction: column;
  /* Centers vertically */
  justify-content: center;
  padding: 20px;
}

h1,
h2 {
  color: #fff;
}

ul,
ol {
  list-style: disc;
  margin-left: 20px;
}
</style>
