<template>
  <div
    :class="{
      'ma-0 pa-2': $vuetify.breakpoint.smAndDown,
      'ma-0 pa-6': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <UserPhoto></UserPhoto>
    <div class="mt-4">
      <v-tabs  grow>
        <v-tab> About </v-tab>
        <v-tab> Friends </v-tab>
        <v-tab> Photos </v-tab>

        <v-tab-item> 
            <AboutVue></AboutVue>
        </v-tab-item>
        <v-tab-item> 
            <FriendsVue></FriendsVue>
        </v-tab-item>
        <v-tab-item> 
            <PhotosVue></PhotosVue>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import UserPhoto from "./shared/components/UserPhoto.vue";
import AboutVue from "./shared/components/About.vue";
import FriendsVue from "./friends/Friends.vue";
import PhotosVue from "./shared/components/Photos.vue";
export default {
  components: {
    UserPhoto,
    AboutVue,
    FriendsVue,
    PhotosVue
  },
  data: () => ({}),
};
</script>

<style scoped>
</style>
