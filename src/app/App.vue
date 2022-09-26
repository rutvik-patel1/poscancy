<template>
  <v-app>
    <Navbar ></Navbar>

    <v-main color="primary" :style="{background: $vuetify.theme.themes['light'].background}" >
      
      <detailed-post></detailed-post>
      <HelloWorldVue/>

    </v-main>
   
  </v-app>
</template>

<script>
import Navbar from './shared/components/Navbar.vue';
import HelloWorldVue from './shared/components/HelloWorld.vue';
import DetailedPost from './posts/DetailedPost.vue';
export default {
  name: "App",

  components: {
    Navbar,
    HelloWorldVue,
    DetailedPost
  },

  data: () => ({
    //
    sidebar: false,
  }),
};
</script>
