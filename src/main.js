import { createApp } from 'vue'
import app           from './app.vue'
import router        from './router'

require('@/root.scss')

createApp(app).use(router).mount('#app')
