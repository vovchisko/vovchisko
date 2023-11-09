import { createRouter, createWebHistory } from 'vue-router'

import Home     from './pages/home.vue'
import CV from './pages/cv.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Oh, hi!' },
    component: Home,
  },
  {
    path: '/cv',
    name: 'cv',
    meta: { title: 'Volodymyr Ishchenko' },
    component: CV,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
