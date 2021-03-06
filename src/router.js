import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (form.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "form" */ './views/form.vue')
    },
    {
      path: '/display',
      name: 'display',
      // route level code-splitting
      // this generates a separate chunk (form.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "display" */ './views/display.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      // route level code-splitting
      // this generates a separate chunk (form.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "alert" */ './views/alert.vue')
    },
    {
      path: '/table-render',
      name: 'table-render',
      component: () => import(/* webpackChunkName: "table-render" */ './views/table-render.vue')
    },
    {
      path: '/table-slot',
      name: 'table-slot',
      component: () => import(/* webpackChunkName: "table-render" */ './views/table-slot.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import(/* webpackChunkName: "table-render" */ './views/tree.vue')
    }
  ]
})
