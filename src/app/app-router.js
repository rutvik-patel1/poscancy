import Vue from 'vue'
import VueRouter from 'vue-router'
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
    name: 'newsfeed',
    component: () => import('./shared/components/MainContainer.vue')

  },
  

]

const routes = [
  ...appRoutes,
  ...eventsRoutes,
  ...postsRoutes,
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
