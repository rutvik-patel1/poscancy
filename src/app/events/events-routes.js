const eventsRoutes = [
    {
        path: '/event',
        name: 'EventContainer',
        component: () => import('./EventContainer.vue')
    },
    {
        path: "/event/calender",
        name: 'Event',
        component: () => import('./Event.vue'),
      },
    {
        path: '/event/:id',
        name: 'EventPage',
        component: () => import('./shared/components/EventPage.vue')
    },

]

export default eventsRoutes