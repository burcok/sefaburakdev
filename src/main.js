import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import analytics from './utils/firebase'


createApp(App).use(router).use(store).use(MotionPlugin).use(autoAnimatePlugin).use(analytics).mount('#app')
