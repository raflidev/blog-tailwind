import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../views/Feed.vue'
import Kategori from '../views/Kategori.vue'
import Login from '../views/Login.vue'
import Jurnal from '../views/Jurnal.vue'
import Tentang from '../views/Tentang.vue'

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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/jurnal',
    name: 'Jurnal',
    component: Jurnal
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: Tentang
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
