import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/home.vue'
import nowplaying from '../components/nowplaying'
import detail from '../components/detail.vue'
import detailleft from '../components/detailleft.vue'
import detailright from '../components/detailright.vue'

import find from '../components/find.vue'
import shopping from '../components/shopping.vue'
import store from '../components/store.vue'
import login from '../components/login.vue'
import cinemadetail from '../components/cinemadetail.vue'

import news from '../components/news.vue'
import dvance from '../components/dvance.vue'
import rank from '../components/rank.vue'
import search from '../components/search.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            component: home
        },
        { //动态路由实现二级路由的跳转
            path: "/detail/:jiaid",
            component: detail,
            children: [{
                    path: 'detailleft',
                    component: detailleft
                },
                {
                    path: 'detailright',
                    component: detailright

                }
            ]
        },
        {
            path: '/find',
            component: find,
          children:[
            {
              path:"news",
              name: "news",
              component:news
            },
            {
              path:"dvance",
              name: "dvance",
              component:dvance
            },
            {
              path:"rank",
              name: "rank",
              component:rank
            },
            {
              path:"search",
              name: "search",
              component:search
            },
            {
              path:"/",
              redirect:"/find/news"
            }
          ]
        },
        {
            path: '/shopping',
            name: "shopping",
            component: shopping,
        },
        {
            path: '/shopping',
            component: shopping
        },
        {
            path: '/store',
            component: store,

        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/cinemadetail',
            name: "cinemadetail",
            component: cinemadetail
        },
        {
            path: '/',
            component: nowplaying
        },
        {
            path: '/nowplaying',
            component: nowplaying
        },
        {
            path: '/*',
            component: nowplaying
        }

    ],
    mode: 'history'
})
