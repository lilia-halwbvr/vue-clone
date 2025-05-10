import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'


const app = createApp(App)


createApp(App).use(router).mount('#app')
app.use(createPinia())



