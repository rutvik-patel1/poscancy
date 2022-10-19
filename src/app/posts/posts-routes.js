const postsRoutes = [
    {
        path: '/post/:id',
        name: 'PostPage',
        component: () => import('./shared/components/DetailedPost.vue')
      },
]

export default postsRoutes