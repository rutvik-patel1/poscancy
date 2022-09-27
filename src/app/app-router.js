import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './shared/components/HelloWorld.vue'
import NewsFeed from './shared/components/NewsFeed.vue'
import { profileRoutes } from './profile'

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
    component: NewsFeed
  },
]

const routes = [...profileRoutes, ...appRoutes];

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
