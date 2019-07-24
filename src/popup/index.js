import Vue from 'vue'
import App from './App'
import router from './router'

import '@/styles/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })

new Vue({
  el: '#app',
  router,
  render: createElement => {
    return createElement(App)
  }
})
