<template>
  <div>
    <v-row v-for="comment in CommentArr" :key="comment.id">
      <v-col cols="2" lg="1">
        <v-avatar size="45px">
          <img
            alt="Avatar"
            :src="
              `https://a1drqkgw.directus.app/assets/` +
              comment.user_created.avatar.id
            "
          />
        </v-avatar>
      </v-col>
      <v-col cols="4" lg="8" class="pl-4">
        <div class="d-block font-weight-bold">
          {{ comment.user_created.first_name }}
          {{ comment.user_created.last_name }}
        </div>
        <div class="d-block">{{ comment.comment }}</div>
      </v-col>
    </v-row>
    <v-row class="mb-2" justify="center"
      ><v-btn depressed>See More Comments</v-btn></v-row
    >
  </div>
</template>

<script>
import { GetCommentsByEvent } from "../../events/shared/services/events";
export default {
  props: ["from"],
  data() {
    return {
      CommentArr: [],
    };
  },
  methods: {
    CheckFrom() {
      if (this.from === "event") {
        GetCommentsByEvent(this.$route.params.id).then((res) => {
          this.CommentArr = res.data;
        });
      } else if (this.from === "post") {
        console.log('for post')
      } else {
        console.log('nothing')
      }
    },
  },
  created() {
    this.CheckFrom();
  },
};
</script>

<style></style>
