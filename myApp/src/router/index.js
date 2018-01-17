import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import haha from '@/components/haha'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/haha',
      name: 'haha',
      component: haha
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
