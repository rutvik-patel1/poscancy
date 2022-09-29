<template>
  <v-card class="pa-6">
    <v-row>
      <v-col cols="2">
        <v-avatar :size="size" class="pa-6">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-col>
      <v-col cols="10">
        <v-textarea
          label="Write Something ..."
          outlined
          rows="3"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2"> </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="6">
            <v-btn outlined ><v-icon>mdi-image-outline</v-icon> Photo</v-btn>
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
    size: 74
  }),
};
</script>

