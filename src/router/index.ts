import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloVue from '@/views/HelloVue.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: HelloVue,
    // redirect: '/',
  },

  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   redirect: '/404',
  // },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
