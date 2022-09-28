<template>
  <v-app>
    <v-main  class="bg">
      <router-view />
      
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
<style>
  .bg{ background: linear-gradient(45deg, #0A66C2 0%, #777d74 100%); }
</style>