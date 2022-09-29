<template>
  <v-card :loading="loading" class="pa-4 pb-0"
  :class="{
          'mx-1 my-6': $vuetify.breakpoint.smAndDown,
          'mx-5 my-12': $vuetify.breakpoint.mdAndUp,
        }"
  >
    <v-row>
      <v-col cols="12" lg="5">
        <v-img
          height="250"
          width="230"
          class="rounded-lg"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </v-col>
      <v-col cols="12" lg="7">
        <p class="text--primary text-h5">Annual Goa Trip</p>
        <div>15 sept - 21 sep 2022</div>
        <v-card-text class="px-1">
          <div
            class="text--primary text-justify mb-2"
          >
            relating to or dependent on charity; charitable "an eleemosynary
            educational institution."relating to or dependent on charity;
            charitable "an eleemosynary educational institution."relating to or
            dependent on "an eleemosynary educational institution."
          </div>
          <p>
            <v-btn depressed outlined color="primary">See More
                <v-icon color="primary">mdi-chevron-right</v-icon>
            </v-btn>
          </p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>