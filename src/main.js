import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(router).use(store).use(MotionPlugin).mount('#app')
