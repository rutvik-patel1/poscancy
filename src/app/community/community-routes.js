const communityRoutes = [
    {
        path: '/community/chat',
        name: 'Chat',
        component: () => import('./poscancyChat.vue')
      },
]
export default communityRoutes
