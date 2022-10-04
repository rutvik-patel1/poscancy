const communityRoutes = [
    {
        path: '/community/chat/:id',
        name: 'Chat',
        component: () => import('./poscancyChat.vue')
      },
]
export default communityRoutes
