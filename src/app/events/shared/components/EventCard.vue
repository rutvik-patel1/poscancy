<template>
  <div>
    <v-card
      class="pa-4 pb-0"
      :class="{
        'mx-1 my-6': $vuetify.breakpoint.smAndDown,
        'mx-5 my-12': $vuetify.breakpoint.mdAndUp,
      }"
      v-for="item in allEventArr"
      :key="item.id"
    >
      <v-row>
        <v-col cols="12" lg="5">
          <v-img
            height="250"
            max-width="100%"
            class="rounded-lg"
            :src="`https://a1drqkgw.directus.app/assets/` + item.media"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="7">
          <p class="text--primary text-h5">{{ item.event_name }}</p>
          <div>{{ item.start_date }} - {{ item.end_date }}</div>
          <v-card-text class="px-1">
            <div class="text--primary text-justify mb-2">
              {{ item.description }}
            </div>
            <p>
              <v-btn depressed outlined color="primary" :to="`event/`+item.id"
                >See More
                <v-icon color="primary">mdi-chevron-right</v-icon>
              </v-btn>
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { events } from "../services/events";

export default {
  data() {
    return {
      allEventArr: {},
    };
  },
  created() {
    events().then((res) => {
      console.log(res.data)
      this.allEventArr = res.data;
    });
  },
};
</script>

<style></style>
