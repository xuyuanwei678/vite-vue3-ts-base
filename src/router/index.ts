/*
 * @Author: BlackJoken
 * @Date: 2022-01-11 10:02:32
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-01-12 11:15:29
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import test from '@/views/test.vue'
import owt from '@/views/owtAli.vue'
import webrtc from '@/views/webrtc.vue'
import srsdemo from '@/views/srsdemo.vue'

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
  },{
    path: '/webrtc',
    name: 'webrtc',
    component: webrtc
  },{
    path: '/srsdemo',
    name: 'srsdemo',
    component: srsdemo
  },{
    path: '/',
    redirect: '/test'
  }
]
})

export default Router
