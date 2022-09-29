import Vue from 'vue'
import VueRouter from 'vue-router'
import { profileRoutes } from './profile'
import Home from './shared/components/MainContainer.vue'
import { eventsRoutes } from './events'
import { postsRoutes } from './posts'


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
  {
    path: '/newsfeed',
    name: 'NewsFeed',
    component: () => import('./shared/components/MainContainer.vue')
  },

]

const routes = [
  ...appRoutes,
  ...eventsRoutes,
  ...postsRoutes,
  ...profileRoutes,
  ...adminRoutes,
  ...authRoutes,
  ...communityRoutes
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
