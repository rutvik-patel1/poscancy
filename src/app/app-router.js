import Vue from 'vue'
import VueRouter from 'vue-router'
import profileRoutes from './profile/profile-routes'
import channelRoutes from './channel/channel-routes'
import eventsRoutes from './events/events-routes'
import adminRoutes from './admin/admin-routes'
import communityRoutes from './community/community-routes'
import postsRoutes from './posts/posts-routes'
import authRoutes from './auth/auth-routes.js'


Vue.use(VueRouter)

const appRoutes = [
  {
    name: 'APPP',
    path:'/',
    redirect:{ name: 'newsfeed' }
  },
  {
    path: '',
    redirect:{ name:'newsfeed' },
    component: ()=> import('./shared/components/Home.vue'),
    children:[
      ...authRoutes,
      {
        path: 'admin',
        component: ()=> import('./shared/components/Home.vue'),
        children:[
            {
            path: '',
            component: () => import('./admin/AdminHome.vue'),
            children:[
              ...adminRoutes,
              ...channelRoutes,
              
            ]
            }
        ]
      },
      {
        path: '',
        name: 'homepage',
        redirect: { name: 'newsfeed' },
        component: () => import('./shared/components/HomeView.vue'),
        children:[
          {
            path: 'newsfeed',
            name: 'newsfeed',
            component: () => import('./shared/components/MainContainer.vue'),
          },
          ...profileRoutes,
          ...eventsRoutes,
          ...postsRoutes,
          ...communityRoutes ,
          {
            path:'/:pathMatch(.*)*',
            name:'404',
            component:() => import('./shared/components/NotFound.vue')
          },
        ]
      },
      
      
    ]
  },
  
]

const routes = [
  ...appRoutes,
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
