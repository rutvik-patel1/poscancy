<template>
  <div :class="{
          'ma-0 pa-2': $vuetify.breakpoint.smAndDown,
          'ma-0 pa-6': $vuetify.breakpoint.mdAndUp,
        }">
    <UserPhoto></UserPhoto>
    <div class="mt-4">
      <v-tabs v-model="activeTab" grow>
        <v-tab v-for="tab of tabs" :key="tab.index" :to="tab.route" exact>
          
          {{ tab.name }}
        </v-tab>

        <v-tab-item v-for="tab of tabs" :key="tab.index" :value="tab.route">
          <router-view></router-view>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import UserPhoto from "./shared/components/UserPhoto.vue";
export default {
  components: {
    UserPhoto,
  },
  data: () => ({
    activeTab: 0,
    tabs: [
      { index: 0, name: "About", route: "/profile" },
      { index: 1, name: "Friends", route: "/profile/friends" },
      { index: 2, name: "Photos", route: "/profile/photos" },
    ],
  }),
};
</script>

<style scoped>
* {
  background-color: white;
}
</style>
