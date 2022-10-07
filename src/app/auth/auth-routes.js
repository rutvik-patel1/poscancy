const authRoutes = [
    {
        path: 'login',
        name: 'login',
        component: ()=> import('./UserLogin.vue')
      },
      {
        path: 'reset',
        name: 'reset',
        component: ()=> import('./ResetPass.vue')
      },
]
export default authRoutes