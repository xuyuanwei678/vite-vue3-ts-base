/*
 * @Author: BlackJoken
 * @Date: 2022-01-10 14:45:33
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-01-12 15:17:30
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import '@/common/rem.js'


import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import relativeTime from'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn' // 导入本地化语言
dayjs.extend(relativeTime)
dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言
console.log(dayjs().from(dayjs('1990-01-01')))



import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.config.globalProperties.$dayjs = dayjs

app.use(ElementPlus, {
    locale: zhCn,
})



app.use(router).use(store).mount('#app')
