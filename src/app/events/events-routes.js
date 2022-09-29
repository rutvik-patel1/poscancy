const eventsRoutes = [
    {
        path: '/event',
        name: 'Home',
        component: () => import('./EventContainer.vue')
    },
    {
        path: '/event/:id',
        name: 'EventPage',
        component: () => import('./shared/EventPage.vue')
    },

]

export default eventsRoutes