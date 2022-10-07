<template>
  <div
    :class="{
      'ma-0 pa-2': $vuetify.breakpoint.smAndDown,
      'ma-0 pa-4': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-card-title> Friends </v-card-title>

    <div
      :class="{
        'ma-0 pa-1': $vuetify.breakpoint.smAndDown,
        'ma-0 pa-2': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-divider></v-divider>
    </div>
    <div
      :class="{
        'ma-0 pa-0': $vuetify.breakpoint.smAndDown,
        'ma-0 pa-2': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-tabs grow>
        <v-tab> All </v-tab>
        <v-tab> Request </v-tab>
        <v-tab> Following </v-tab>

        <v-tab-item>
          <AllVue></AllVue>
        </v-tab-item>
        <v-tab-item>
          <RequestVue></RequestVue>
        </v-tab-item>
        <v-tab-item>
          <FollowingVue></FollowingVue>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import AllVue from "./shared/component/All.vue";
import RequestVue from "./shared/component/Request.vue";
import FollowingVue from "./shared/component/Following.vue";
export default {
  components: {
    AllVue,
    RequestVue,
    FollowingVue,
  },
};
</script>
