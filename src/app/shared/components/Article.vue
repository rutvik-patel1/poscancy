<template>
  <v-card class="pa-6">
    <v-row>
      <v-col cols="2">
        <v-avatar :size="size" class="pa-6">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-col>
      <v-col cols="10">
        <v-textarea label="Write Something ..." outlined rows="3"></v-textarea>
      </v-col>
    </v-row>

    <v-row>
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
    </v-row>
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
        this.size = 52;
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
