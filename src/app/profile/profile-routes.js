import Profile from './profile.vue'
import About from './shared/components/About.vue'
import Friends from './friends/Friends.vue'
import Photos from './shared/components/Photos.vue'
import AllList from './friends/shared/component/All.vue'
import RequestList from './friends/shared/component/Request.vue'
import FollowingList from './friends/shared/component/Following.vue'

const routes = [
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children: [
        {
          path: "",
          component: About
        },
        {
          path: "friends",
          component: Friends,
          children: [
            {
              path: "",
              component: AllList
            },
            {
              path: "request",
              component: RequestList
            },
            {
              path: "following",
              component: FollowingList
            },
          ]
        },
        {
          path: "photos",
          component: Photos
        },
      ]
    },
]
  
export default routes