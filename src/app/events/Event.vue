<template>
  <div>
    <div>
      <v-card elevation="2" outlined class="ma-4 pa-4 event-heading">
        <h1>Event Calender</h1>
      </v-card>

      <div class="d-flex justify-end">
        <v-btn class="btn-create ma-4 pa-4" color="#0A66C2"
          ><v-icon>mdi-plus</v-icon> create
        </v-btn>
      </div>
    </div>
    <v-card elevation="2" outlined class="ma-4 pa-4">
      <Calender></Calender>
    </v-card>
  </div>
</template>

<script>
import Calender from "./Calender.vue";
export default {
  name: "Event",
  components: {
    Calender,
  },
};
</script>

<style scoped>
.event-heading {
  color: #fff;
  background-color: #0a66c2;
}
.btn-create {
  color: #fff;
}
</style>
