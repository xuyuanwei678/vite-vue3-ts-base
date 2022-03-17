/*
 * @Author: BlackJoken
 * @Date: 2022-01-11 10:02:32
 * @LastEditors: BlackJoken
 * @LastEditTime: 2022-03-17 09:31:47
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import test from '@/views/test.vue'
import owt from '@/views/owtAli.vue'
import webrtc from '@/views/webrtc.vue'
import srsdemo from '@/views/srsdemo.vue'



/** 自动加载其他路由模块 */
const registerRoute = () => {
  const routerList = []
  const modules = import.meta.globEager('./*.ts')
  for (const val of Object.values(modules)) routerList.push(val.default)
  return routerList.flat()//用于将嵌套的数组拉平 [1, 2, [3, 4]].flat()// [1, 2, 3, 4] 
}
/** 自动加载其他路由模块end */

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...registerRoute(),
    {
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
