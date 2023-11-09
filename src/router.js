import { createRouter, createWebHistory } from 'vue-router'

import Home     from './pages/home.vue'
import DevStory from './pages/dev-story.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Oh, hi!' },
    component: Home,
  },
  {
    path: '/dev-story',
    name: 'Volodymyr Ishchenko',
    meta: { title: 'Volodymyr Ishchenko' },
    component: DevStory,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
