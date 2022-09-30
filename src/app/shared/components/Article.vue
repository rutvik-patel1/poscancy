<template>
  <v-card class="pa-6">
    <v-row>
      <v-col  cols="12" xl="4" lg="3" md="2" sm="2" xs="2">
        <v-avatar
          :size="size"
          :class="{
            'ma-1 pa-0': $vuetify.breakpoint.smAndDown,
            'ma-0 pa-6': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-col>
      <v-col  cols="12" xl="8" lg="9" md="10" sm="10" xs="10">
        <v-row>
          <v-textarea
            label="Write Something ..."
            outlined
            rows="3"
          ></v-textarea>
        </v-row>

        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                <v-btn outlined><v-icon>mdi-image-outline</v-icon> Photo</v-btn>
              </v-col>
              <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                <v-btn outlined><v-icon>mdi-video-outline</v-icon> Video</v-btn>
              </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col cols="2"> </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="6">
            <v-btn outlined><v-icon>mdi-image-outline</v-icon> Photo</v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn outlined><v-icon>mdi-video-outline</v-icon> Video</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
  </v-card>
</template>

<script>
export default {
  name: "Article",
  data: () => ({
    size: 74,
  }),
  methods: {
    onResize() {
      if (window.innerWidth > 1400) {
        this.size = 74;
      } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
        this.size = 74;
      } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
        this.size = 68;
      } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
        this.size = 60;
      } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
        this.size = 52;
      } else if (window.innerWidth <= 576 && window.innerWidth > 460) {
        this.size = 42;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
}
</style>
