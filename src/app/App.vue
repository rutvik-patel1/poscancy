<template>
  <v-app>
    <Navbar></Navbar>

    <v-main
      color="primary"
      :style="{ background: $vuetify.theme.themes['light'].background }"
    >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./shared/components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },
  data: () => ({
    //
    sidebar: false,
  }),
};
</script>


<!-- <style>
  *{
    background-color: #ECEEFD;
  }
</style> -->

