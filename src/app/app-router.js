import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './shared/components/HelloWorld.vue'
import { eventRoutes } from './event'
import { channelRoutes } from './channel'

Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]


const routes = [...eventRoutes, ...channelRoutes ,...appRoutes];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
