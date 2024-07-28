import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/aboutPage.vue')
    }
  ]
})

export default router
