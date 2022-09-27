import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './shared/components/MainContainer.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/event',
    name: 'Home',
    component: () => import('./events/EventContainer.vue')
  },
  {
    path: '/event/:id',
    name: 'EventPage',
    component: () => import('./events/EventPage.vue')
  },
  {
    path: '/post/:id',
    name: 'Home',
    component: () => import('./posts/DetailedPost.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
