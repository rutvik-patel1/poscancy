<template>
  <v-container>
    <v-card  class="ma-4 pa-3">
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
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="7">
            <p class="text--primary text-h5">Annual Goa Trip</p>
            <div>15 sept - 21 sep 2022</div>
            <v-card-text class="px-1">
              <div class="text--primary text-justify mb-2">
                relating to or dependent on charity; charitable "an eleemosynary
                educational institution."relating to or dependent on charity;
                charitable "an eleemosynary educational institution."relating to
                or dependent on "an eleemosynary educational institution."
              </div>
              <p>
                <v-btn color="primary"
                 to="/admin/event/1/response"
                  >See Form Response
                  <v-icon >mdi-chevron-right</v-icon>
                </v-btn>
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-card :loading="loading" class="mx-5 my-8 pa-4 pb-0" max-width="700">
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
              <div class="text--primary text-justify mb-2">
                relating to or dependent on charity; charitable "an eleemosynary
                educational institution."relating to or dependent on charity;
                charitable "an eleemosynary educational institution."relating to
                or dependent on "an eleemosynary educational institution."
              </div>
              <p>
                <v-btn color="primary"
                 to="/admin/event/1/response"
                  >See Form Response
                  <v-icon >mdi-chevron-right</v-icon>
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
// import EventCard from '../../events/shared/EventCard.vue';
export default {};
</script>

<style>
</style>