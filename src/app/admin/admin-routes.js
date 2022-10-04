import Users from './AppUsers.vue'
import Dashboard from './Dashboard.vue'

const adminRoutes = [
    {   path: '/admin/users',
        name: 'users',
        component: Users
    },
    {   path: '/admin/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
]
export default adminRoutes