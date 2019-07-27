import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/popup/layout'

const router = new Router({
  routes: [
    {
      path: '/',  // 工作台
      component: Layout,
      redirect: 'work/index',
      children: [
        {
          path: 'work/index',  // 首页
          name: 'work',
          component: () => import('@/popup/App/work'),
          meta: { title: 'Dashboard', icon: 'dashboard' }
        }
      ]
    },

    {
      path: '/shop', // 店铺
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/popup/App/shop'),
          meta: { title: 'Dashboard', icon: 'dashboard' }
        }
      ]
    },

    {
      path: '/mine', // 我的
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/popup/App/mine'),
          meta: { title: 'Dashboard', icon: 'dashboard' }
        }
      ]
    },
    
    {
      path: '/login', // 登录
      component: () => import('@/popup/App/login')
    }
  ]
})

export default router
