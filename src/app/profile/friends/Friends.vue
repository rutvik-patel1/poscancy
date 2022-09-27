<template>
  <div class="ma-4">
    <v-card elevation="2" outlined>
      <v-tabs v-model="activeTab" grow>
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>

      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
        <router-view></router-view>
      </v-tab-item>
    </v-tabs>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeTab: `/profile/friends`,
        tabs: [
          { id: 1, name: "All", route: `/profile/friends`},
          { id: 2, name: "Request", route:`/profile/friends/request` },
          { id: 3, name: "Following", route: `/profile/friends/following` },
        ],
      };
    },
  };
  </script>