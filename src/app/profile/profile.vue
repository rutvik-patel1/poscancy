<template>
  <div class="ma-6 pa-6">
    <UserPhoto></UserPhoto>

    <div class="mt-4">
      <v-tabs v-model="activeTab" grow>
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>

      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
        <router-view></router-view>
      </v-tab-item>
    </v-tabs>
    </div>
   
  </div>
</template>

<script>
  import UserPhoto from './shared/components/UserPhoto.vue'
export default {
  components: {
    UserPhoto
  },
  data() {
    return {
      activeTab: `/profile`,
      tabs: [
        { id: 1, name: "About", route: `/profile`},
        { id: 2, name: "Friends", route:`/profile/friends` },
        { id: 3, name: "Photos", route: `/profile/photos` },
      ],
    };
  },
};
</script>

<style scoped>
*{
 background-color: white;
}
</style>