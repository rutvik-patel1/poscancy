<template>
  <div>
    <v-card class="mx-3 my-2 pa-2 text-h5 primary" style="color: white"
        >Channel</v-card
      >
    <v-card elevation="2" outlined class="ma-4 pa-4">
      <ChannelTableVue></ChannelTableVue>
    </v-card>
  </div>
</template>

<script>
import ChannelTableVue from "./shared/components/ChannelTable.vue";
export default {
  name: "Channel",
  components: {
    ChannelTableVue,
  },
};
</script>

<style scoped>
.event-heading {
  color: #fff;
  background-color: #0a66c2;
}
</style>
