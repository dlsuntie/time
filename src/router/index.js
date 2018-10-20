import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/home.vue'
import find from '../components/find.vue'
import shopping from '../components/shopping.vue'
import store from '../components/store.vue'
import login from '../components/login.vue'

export default new Router({
    routes: [{
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
            component: store,

        },
        {
            path: '/login',
            name: "login",
            component: login
        },
    ]
})