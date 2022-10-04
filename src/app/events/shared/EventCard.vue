<template>
  <v-card
    class="pa-4 pb-0"
    :class="{
      'mx-1 my-6': $vuetify.breakpoint.smAndDown,
      'mx-5 my-12': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-row>
      <v-col cols="12" lg="5">
        <v-img
          height="250"
          max-width="100%"
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
            <v-btn depressed outlined color="primary" to="event/1"
              >See More
              <v-icon color="primary">mdi-chevron-right</v-icon>
            </v-btn>
          </p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
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