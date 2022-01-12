import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import '@/common/rem.js'

createApp(App).use(router).use(store).mount('#app')
