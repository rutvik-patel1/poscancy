<template>
  <div>
    <v-row v-for="comment in comments" :key="comment.id">
      <v-col cols="2" lg="1">
        <v-avatar size="45px" v-bind="attrs" v-on="on">
          <img alt="Avatar" :src="comment.url" />
        </v-avatar>
      </v-col>
      <v-col cols="4" lg="8" class="pl-4">
        <div class="d-block font-weight-bold">{{ comment.author }}</div>
        <div class="d-block">{{ comment.comment }}</div>
      </v-col>
    </v-row>
    <v-row class="mb-2" justify="center"
      ><v-btn depressed>See More Comments</v-btn></v-row
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          id: 1,
          url: "https://avatars0.githubusercontent.com/u/90640?v=4&s=460",
          author: "John Smit",
          comment: "Nice post",
        },
        {
          id: 2,
          url: "https://avatars0.githubusercontent.com/u/90840?v=4&s=460",
          author: "chetan pUnani",
          comment: "Nice post",
        },
        {
          id: 3,
          url: "https://avatars0.githubusercontent.com/u/90140?v=4&s=460",
          author: "Rutvik Patel",
          comment: "Nice post",
        },
        {
          id: 4,
          url: "https://avatars0.githubusercontent.com/u/90540?v=4&s=460",
          author: "Sudarshan Dey",
          comment: "Nice post",
        },
      ],
    };
  },
};
</script>

<style>
</style>
