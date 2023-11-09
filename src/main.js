import { createApp } from 'vue'
import app           from './app.vue'
import router        from './router'

import('@/root.scss')

createApp(app).use(router).mount('#app')
