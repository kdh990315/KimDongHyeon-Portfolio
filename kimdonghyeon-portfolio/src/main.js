import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'

import '@/scss/index.scss';

createApp(App).use(router).mount('#app')
