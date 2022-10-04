import Users from './AppUsers.vue'
import Dashboard from './Dashboard.vue'

const adminRoutes = [
    {   path: 'users',
        name: 'users',
        component: Users
    },
    {   path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path:'event',
        name:'AdminEvent',
        component: () => import('./shared/AdminEvent.vue')
      },
      {
        path:'event/create',
        name:'CreateEvent',
        component: () => import('./shared/CreateEvent.vue')
      },
      {
        path:'event/:id/response',
        name:'AdminEventResponse',
        component: () => import('./shared/EventResponse.vue')
      },
]
export default adminRoutes