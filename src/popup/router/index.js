import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/popup/layout'

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/popup/App/App1'),
        }
      ]
    },

    {
      path: '/foo',
      component: Layout,
      children: [
        {
          path: 'next',
          component: () => import('@/popup/App/App2'),
        }
      ]
    }
  ]
})

export default router
