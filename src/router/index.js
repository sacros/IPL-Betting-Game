import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
// import Signup from '@/components/Signup'
import BetPage from '@/components/BetPage'
import AdminPage from '@/components/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: Signup
    // }
    {
      path: '/adminPage',
      name: 'adminPage',
      component: AdminPage
    },
    {
      path: '/betPage',
      name: 'betPage',
      component: BetPage
    }
  ]
})
