/*
 * @Author: BlackJoken
 * @Date: 2022-01-11 10:02:32
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-01-12 11:15:29
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import test from '@/views/test.vue'
import owt from '@/views/owtAli.vue'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/test',
    name: 'test',
    component: test
  },{
    path: '/owt',
    name: 'owt',
    component: owt
  }
]
})

export default Router
