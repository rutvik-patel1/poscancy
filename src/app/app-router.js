import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './shared/components/HelloWorld.vue'
import Login from './auth/UserLogin.vue'
import ResetPass from './auth/ResetPass.vue'
import Chat from './community/poscancyChat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetPass
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
