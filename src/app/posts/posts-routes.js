const postsRoutes = [
    {
        path: '/post/:id',
        name: 'PostPage',
        component: () => import('./shared/DetailedPost.vue')
      },
]

export default postsRoutes