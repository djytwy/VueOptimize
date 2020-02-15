import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/* 
  路由定义
  2020-2-14 田文杨
*/
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export function resetRouter () {
  router.replace('/login')
}

export default router
