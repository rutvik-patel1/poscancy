<template>
  <div :class="{
          'ma-0 pa-2': $vuetify.breakpoint.smAndDown,
          'ma-0 pa-4': $vuetify.breakpoint.mdAndUp,
        }">
    <v-card elevation="2" outlined>
      <v-card-title> Friends </v-card-title>

      <div  :class="{
          'ma-0 pa-1': $vuetify.breakpoint.smAndDown,
          'ma-0 pa-2': $vuetify.breakpoint.mdAndUp,
        }">
        <v-divider></v-divider>
      </div>
      <div  :class="{
          'ma-0 pa-0': $vuetify.breakpoint.smAndDown,
          'ma-0 pa-2': $vuetify.breakpoint.mdAndUp,
        }">
        <v-tabs v-model="activeTab" grow>
          <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
            {{ tab.name }}
          </v-tab>

          <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
            <router-view></router-view>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: `/profile/friends`,
      tabs: [
        { id: 1, name: "All", route: `/profile/friends` },
        { id: 2, name: "Request", route: `/profile/friends/request` },
        { id: 3, name: "Following", route: `/profile/friends/following` },
      ],
    };
  },
};
</script>
