import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import nowplaying from "../components/nowplaying"



import find from '../components/find.vue'
import shopping from '../components/shopping.vue'
import store from '../components/store.vue'
import login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home', 
      component: home 
    },
     {
      path: '/find',  
      component: find
    },
     {
      path: '/shopping', 
      component: shopping
    },
     {
      path: '/store',    
      component: store
    },
    {
      path: '/login',   
      component: login
    },
    {
      path:'/nowplaying',
      component:nowplaying
      
    }
  ]
})
