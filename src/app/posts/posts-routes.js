const postsRoutes = [
    {
        path: '/post/:id',
        name: 'Home',
        component: () => import('./shared/DetailedPost.vue')
      },
]

export default postsRoutes