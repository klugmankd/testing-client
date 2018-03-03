import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Directions from '@/components/Directions'
import Direction from '@/components/Direction'
import AuthRedirect from '@/components/AuthRedirect'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/:token',
      name: 'AuthRedirect',
      component: AuthRedirect
    },
    {
      path: '/directions',
      name: 'Directions',
      component: Directions
    },
    {
      path: '/directions/:name',
      name: 'Direction',
      component: Direction
    },
    {
      path: '/directions/:direction/:difficulty',
      name: 'Test',
      component: Test
    }
  ]
})
