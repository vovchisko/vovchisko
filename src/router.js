import { createRouter, createWebHistory } from 'vue-router'

import Home            from './pages/home.vue'
import CV              from './pages/cv.vue'
import Donate          from './pages/donate.vue'
import { ROUTE_NAMES } from '@/route-names.js'

const routes = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    meta: {
      title: 'Oh, hi!',
      metaTags: [
        { property: 'og:title', content: 'Volodymyr Ishchenko' },
        { property: 'og:description', content: 'Front-end developer, UI/UX designer.' },
        { property: 'og:url', content: 'https://vovchisko.dev' },
        { property: 'og:image', content: 'https://vovchisko.dev/share-main.jpg' },
        { property: 'og:image:secure_url', content: 'https://vovchisko.dev/share-main.jpg' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '628' },
        { property: 'og:image:alt', content: 'Oh, hi!' },
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#00aba9' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@vovchisko' },
        { name: 'twitter:title', content: 'Volodymyr Ishchenko' },
        { name: 'twitter:description', content: 'Front-end developer, UI/UX designer.' },
        { name: 'twitter:image', content: 'https://vovchisko.dev/share-main.jpeg' },
      ],
    },
    component: Home,
  },
  {
    path: '/cv',
    name: ROUTE_NAMES.CV,
    meta: {
      title: 'Volodymyr Ishchenko',
      metaTags: [
        { property: 'og:title', content: 'Volodymyr Ishchenko' },
        { property: 'og:description', content: 'Front-end developer, UI/UX designer.' },
        { property: 'og:url', content: 'https://vovchisko.dev/cv' },
        { property: 'og:image', content: 'https://vovchisko.dev/share-main.jpg' },
        { property: 'og:image:secure_url', content: 'https://vovchisko.dev/share-main.jpg' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '628' },
        { property: 'og:image:alt', content: 'Oh, hi!' },
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#00aba9' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@vovchisko' },
        { name: 'twitter:title', content: 'Volodymyr Ishchenko' },
        { name: 'twitter:description', content: 'Front-end developer, UI/UX designer.' },
        { name: 'twitter:image', content: 'https://vovchisko.dev/share-main.jpg' },
      ],
    },
    component: CV,
  },
  {
    path: '/donate',
    name: ROUTE_NAMES.DONATE,
    meta: {
      title: 'I\'m from Ukraine',
      metaTags: [
        { property: 'og:title', content: 'Ukrainian Drone Workshop 🇺🇦' },
        { property: 'og:description', content: 'Russian warship, go fuck yourself!' },
        { property: 'og:url', content: 'https://vovchisko.dev/donate' },
        { property: 'og:image', content: 'https://vovchisko.dev/share-drone.jpg' },
        { property: 'og:image:secure_url', content: 'https://vovchisko.dev/share-drone.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '628' },
        { property: 'og:image:alt', content: 'Drone nest' },
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#00aba9' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@vovchisko' },
        { name: 'twitter:title', content: 'Donate for Ukrainian Drone Workshop ❤️' },
        { name: 'twitter:description', content: 'Russian warship, go fuck yourself!' },
        { name: 'twitter:image', content: 'https://vovchisko.dev/share-drone.jpg' },
      ],
    },
    component: Donate,
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
