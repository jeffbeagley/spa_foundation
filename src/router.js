import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: '/about',
            name: 'about',
            meta: { title: 'about page' },
            component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
        }
    ]
})
