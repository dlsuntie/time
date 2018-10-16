import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: "home",
      component: home
    },
     {
      path: '/find',
      name: "find",
      component: find
    },
     {
      path: '/shopping',
      name: "shopping",
      component: shopping
    },
     {
      path: '/store',
      name: "store",
      component: store
    },
    {
      path: '/login',
      name: "login",
      component: login
    },
  ]
})
