<template>
  <div>
    <div>
      <v-card class="mx-3 my-2 pa-2 text-h5 primary" style="color: white"
        >Event Calender</v-card
      >

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
import Calender from "./shared/components/Calender.vue";
export default {
  name: "Event",
  components: {
    Calender,
  },
};
</script>

<style scoped>
.btn-create {
  color: #fff;
}
</style>
