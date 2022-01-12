/*
 * @Author: BlackJoken
 * @Date: 2022-01-10 14:45:33
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-01-12 11:13:48
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import '@/common/rem.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})

app.use(router).use(store).mount('#app')
