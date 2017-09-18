import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hours from '@/components/Hours'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: { template: '<div />' }
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/hours',
      component: Hours
    },
    {
      path: '*',
      component: { template: '<div>404</div>' }
    }
  ]
})
