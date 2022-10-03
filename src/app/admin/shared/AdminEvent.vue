<template>
  <v-container>
    <v-card class="ma-4 pa-3">
      <div class="d-flex justify-space-between">
        <h2 class="">Events</h2>
        <v-btn color="primary">Create Event</v-btn>
      </div>
    </v-card>
    <v-card outlined class="ma-4 pa-1">
      <v-card :loading="loading" class="mx-5 my-8 pa-4 pb-0" max-width="700">
        <v-row>
          <v-col cols="12" lg="5">
            <v-img
              height="250"
              width="230"
              class="rounded-lg"
              :src="media"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="7">
            <p class="text--primary text-h5">{{ title }}</p>
            <div>{{ date }}</div>
            <v-card-text class="px-1">
              <div class="text--primary text-justify mb-2">
                {{ caption }}
              </div>
              <p>
                <v-btn color="primary" to="/admin/event/1/response"
                  >See Form Response
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Annual Goa Trip",
      date: "15 sept - 21 sep 2022",
      media: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      caption:
        "relating to or dependent on charity charitable an eleemosynary relating to or \n dependent on charity charitable an eleemosynary educational \n institution relating to or dependent on charity charitable an eleemosynary educational institution relating to or dependent on \n charity charitable",
    };
  },
};
</script>

<style>
</style>