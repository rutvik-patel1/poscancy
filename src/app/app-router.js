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
  {
    path:'/admin/event/',
    name:'AdminEvent',
    component: () => import('./admin/shared/AdminEvent.vue')
  },
  {
    path:'/admin/event/:id/response',
    name:'AdminEvent',
    component: () => import('./admin/shared/EventResponse.vue')
  },
  {
    path:'/admin/event/create',
    name:'CreateEvent',
    component: () => import('./admin/shared/CreateEvent.vue')
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
