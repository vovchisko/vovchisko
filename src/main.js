import { createApp }      from 'vue'
import app                from '@/app.vue'
import router             from '@/router.js'
import { updateMetaTags } from '@/meta.js'

router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  // Update meta tags
  const metaTags = to.meta.metaTags || []
  updateMetaTags(metaTags)

  next()
})

createApp(app).use(router).mount('#app')
