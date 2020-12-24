import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../views/Feed.vue'
import Kategori from '../views/Kategori.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/kategori',
    name: 'Kategori',
    component: Kategori
  },
  {
    path: '/tentang',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
