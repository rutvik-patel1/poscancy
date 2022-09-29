import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './shared/components/HelloWorld.vue'
import adminRoutes from './admin/admin-routes.js'
import authRoutes from './auth/auth-routes.js'
import communityRoutes from './community/community-routes.js'
Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
const routes = [ ...appRoutes,...adminRoutes,...authRoutes,...communityRoutes ]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
