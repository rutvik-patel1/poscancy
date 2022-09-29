<template>
  <div>
    <v-card elevation="2" outlined class="ma-4 pa-4 event-heading">
      <h1>Channels</h1>
    </v-card>
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
