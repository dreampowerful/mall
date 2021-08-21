import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('@/views/home/home')
const profile = () => import('@/views/profile/profile')
const shopCat = () => import('@/views/shopCat/shopCat')
const category = () => import('@/views/category/category')
const detail = () => import('@/views/detail/detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/shopCat',
    name: 'shopCat',
    component: shopCat
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  //:iid  动态路由
  {
    path: '/detail/:iid',
    name: 'detail',
    component: detail
  },

]
const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
