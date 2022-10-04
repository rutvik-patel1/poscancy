<template>
    
    <div>
        <!-- <router-view></router-view> -->
        <Navbar></Navbar>
        <v-main
          color="primary"
          :style="{ background: $vuetify.theme.themes['light'].background }"
        >
          <router-view :key="$route.fullPath"></router-view>
        </v-main>
    </div>

</template>

<script>
import Navbar from './Navbar.vue';

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

