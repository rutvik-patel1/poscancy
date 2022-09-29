import Vue from 'vue'
import VueRouter from 'vue-router'
import { profileRoutes } from './profile'
import Home from './shared/components/MainContainer.vue'
import { eventsRoutes } from './events'
import { postsRoutes } from './posts'

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
  ...profileRoutes
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
