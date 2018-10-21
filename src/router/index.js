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

Vue.use(Router)

export default new Router({
    routes: [
          {
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
            component: find
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
            // children: [{
            //     path: '/store/mw.html',
            //     component: mw
            // }]
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
            path: '/nowplaying',
            component: nowplaying
        }
<<<<<<< HEAD
    ],
	mode:"history"
})
=======
    ]
})

>>>>>>> a45dc15e0712392a20c2fd572a67d18ca30f1e59
