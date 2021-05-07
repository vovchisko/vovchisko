import { createApp } from 'vue'
import app           from './app.vue'
import router        from './router'

// import '/public/fonts/stylesheet.css'
import './root.scss'

createApp(app).use(router).mount('#app')
