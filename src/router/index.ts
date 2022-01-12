import { createRouter, createWebHashHistory } from 'vue-router'
import test from '@/views/test.vue'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/test',
    name: 'test',
    component: test
  }]
})

export default Router
