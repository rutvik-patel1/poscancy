import Event from './Event.vue'

const routes = [
  {
    path: "/event",
    name: 'Event',
    component: Event,
    children: [
     {
      path: 'calender',
      name: 'Calender',
      component: Event
     }
    ]
  },
]

export default routes