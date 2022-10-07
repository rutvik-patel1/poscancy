<template>
  <div>
    <div>
      <v-card class="mx-3 my-2 pa-2 text-h5 primary" style="color: white"
        >Dashboard</v-card
      >
    </div>

    <UserDashboard></UserDashboard>
    <EventDashboard></EventDashboard>
    <CommunityDashboard></CommunityDashboard>
    <EventCardDashboard></EventCardDashboard>
    <TopStories></TopStories>
  </div>
</template>

<script>
import UserDashboard from "./shared/UserDashboard.vue";
import EventDashboard from "./shared/EventDashboard.vue";
import CommunityDashboard from "./shared/CommunityDashboard.vue";
import EventCardDashboard from "./shared/EventCardDashboard.vue";
import TopStories from "./shared/TopStories.vue"

export default {
  name: "Dashboard",
  components: {
    UserDashboard,
    EventDashboard,
    CommunityDashboard,
    EventCardDashboard,
    TopStories
  },
  data: () => ({}),
};
</script>
