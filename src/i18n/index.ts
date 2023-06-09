import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.yml'
import zhCN from './locales/zh-CN.yml'
import { useAppStoreWithOut } from '@/store/modules/app'
import type { Language } from '@/store/modules/app/helper'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'zh-CN' as Language

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  useScope: 'global',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
})

export const { t } = i18n.global

export function setLocale(locale: Language) {
  i18n.global.locale = locale
}

export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
