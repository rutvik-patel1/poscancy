<template>
  <v-app>
    <Navbar ></Navbar>

    <v-main color="primary" :style="{background: $vuetify.theme.themes['light'].background}" >
      <HelloWorldVue/>
    </v-main>
   
  </v-app>
</template>

<script>
import Navbar from './shared/components/Navbar.vue';
import HelloWorldVue from './shared/components/HelloWorld.vue';

export default {
  name: "App",

  components: {
    Navbar,
    HelloWorldVue
  },

  data: () => ({
    //
    sidebar: false,
  }),
};
</script>
