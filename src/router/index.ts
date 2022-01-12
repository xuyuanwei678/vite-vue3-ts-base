/*
 * @Author: BlackJoken
 * @Date: 2022-01-11 10:02:32
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-01-12 11:15:29
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import test from '@/views/test.vue'
import zhcn from '@/views/zhcn.vue'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/test',
    name: 'test',
    component: test
  },{
    path: '/zhcn',
    name: 'zhcn',
    component: zhcn
  }
]
})

export default Router
