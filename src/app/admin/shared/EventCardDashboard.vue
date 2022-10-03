<template>
  <div>
    <div outlined class="ma-1 pa-4">
      <v-card-title> Ongoing Events </v-card-title>

      <div class="px-6">
        <v-divider></v-divider>
      </div>

      <div class="d-flex flex-row flex-wrap">
        <v-card class="ma-4 pa-4" width="330" v-for="item in ongoing" :key="item">
          <v-container>
            <v-row>
              <v-col
                cols="4"
                xl="4"
                lg="4"
                md="4"
                sm="3"
                xs="2"
                class="d-flex align-center"
              >
                <v-icon size="42">mdi-calendar-month-outline</v-icon>
              </v-col>
              <v-col
                cols="8"
                xl="8"
                lg="8"
                md="8"
                sm="9"
                xs="10"
                class="d-flex align-center"
              >
                <div>
                  <p class="text--primary text-h6">{{ item.name }}</p>
                  <div>{{ item.date }}</div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-img :src="item.image"> </v-img>
            </v-row>

            <v-row class="d-flex justify-center">
              <div class="ma-2">
                <v-btn depressed outlined color="primary"
                  >See More
                  <v-icon color="primary">mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </div>

    <div outlined class="ma-1 pa-4">
      <v-card-title> Upcomming Events </v-card-title>

      <div class="px-6">
        <v-divider></v-divider>
      </div>

      <div class="d-flex flex-row flex-wrap">
        <v-card class="ma-4 pa-4" width="330" v-for="item in upcoming" :key="item">
          <v-container>
            <v-row>
              <v-col
                cols="4"
                xl="4"
                lg="4"
                md="4"
                sm="3"
                xs="2"
                class="d-flex align-center"
              >
                <v-icon size="42">mdi-calendar-month-outline</v-icon>
              </v-col>
              <v-col
                cols="8"
                xl="8"
                lg="8"
                md="8"
                sm="9"
                xs="10"
                class="d-flex align-center"
              >
                <div>
                  <p class="text--primary text-h6">{{ item.name }}</p>
                  <div>{{ item.date }}</div>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-img :src="item.image"> </v-img>
            </v-row>

            <v-row class="d-flex justify-center">
              <div class="ma-2">
                <v-btn depressed outlined color="primary"
                  >See More
                  <v-icon color="primary">mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ongoing: [
      {
        name: "Annual Goa Trip",
        date: "14 sept - 20 sep 2022",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        name: "Annual Goa Trip",
        date: "15 sept - 21 sep 2022",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        name: "Annual Goa Trip",
        date: "16 sept - 22 sep 2022",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        name: "Annual Goa Trip",
        date: "17 sept - 23 sep 2022",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
    ],
    upcoming: [
      {
        name: "Annual Goa Trip",
        date: "15 Feb - 21 Feb 2023",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        name: "Annual Goa Trip",
        date: "16 Feb - 22 Feb 2023",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        name: "Annual Goa Trip",
        date: "17 Feb - 23 Feb 2023",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        name: "Annual Goa Trip",
        date: "18 Feb - 24 Feb 2023",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
    ],
  }),
};
</script>

<style></style>
