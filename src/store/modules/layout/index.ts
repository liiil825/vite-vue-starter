import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LayoutState } from './helper'
import { getLocalSetting, setLocalSetting } from './helper'

export const useLayoutStore = defineStore('layout-store', {
  state: (): LayoutState => getLocalSetting(),
  actions: {
    toglleHidder() {
      this.$patch({
        hidden: !this.hidden,
      })
      this.recordState()
    },

    recordState() {
      setLocalSetting(this.$state)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
