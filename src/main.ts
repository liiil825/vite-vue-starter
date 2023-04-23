import { createApp } from 'vue'

import { setupI18n } from './i18n'
import { setupAssets } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  setupAssets()
  setupStore(app)
  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
