<template>
  <v-container
    :class="{
      'px-0': $vuetify.breakpoint.smAndDown,
      'px-15': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-card class="pa-4 pb-1 ma-auto" style="max-width:550px">
      <v-row class="mb-1">
        <v-col cols="2" lg="1" sm="1">
          <v-avatar size="45px">
            <img alt="Avatar" :src="avatar" />
          </v-avatar>
        </v-col>
        <v-col cols="5" lg="7" sm="8" class="pl-4">
          <div class="d-block font-weight-bold">{{ author }}</div>
          <div class="d-block text-caption">
            {{ new Date(post.date_created).toUTCString() }}
          </div>
        </v-col>
        <v-col cols="5" lg="4" sm="1">
          <v-btn depressed>
            Follow
            <v-icon>add</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-img
        height="250"
        max-width="500"
        class="rounded-lg"
        :src="`https://a1drqkgw.directus.app/assets/` + post.media"
      ></v-img>

      <v-card-text class="px-1">
        <div class="text--primary text-justify">
          {{ post.description }}
        </div>
      </v-card-text>
      <v-divider class="mb-2"></v-divider>
      <v-row>
        <v-col align="center">
          <v-btn icon color="primary" tile>
            <v-icon>mdi-thumb-up-outline</v-icon>
            <div style="color: #777d74">Likes</div>
          </v-btn>
        </v-col>

        <v-col align="center">
          <v-btn icon color="primary">
            <v-icon>mdi-comment</v-icon>
            <div style="color: #777d74">Comments</div>
          </v-btn>
        </v-col>

        <v-col align="center">
          <v-btn icon color="primary">
            <v-icon>mdi-share</v-icon>
            <div style="color: #777d74">Share</div>
          </v-btn>
        </v-col>
      </v-row>
      <!-- <v-divider class="mx-4"></v-divider> -->
      <v-text-field
        class="mt-2"
        outlined
        dense
        label="Add comment"
        prepend-inner-icon="mdi-emoticon-happy-outline"
      ></v-text-field>
      <comment-section></comment-section>
    </v-card>
  </v-container>
</template>
  
<script>
import { getPost } from "../services/posts";
import CommentSection from "./CommentSec.vue";

export default {
  components: {
    CommentSection,
  },
  data() {
    return {
      avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      author:'John Smith',
      post:[], 
    };
  },
  methods:{
    async getPostById(){
       let id = this.$route.params.id;
       console.log(id);
       let res = await getPost(id);
       this.post = res.data;
       console.log(this.post);
    }
  },
  mounted(){
    this.getPostById();
  }
};
</script>
  
  <style>
html {
  overflow-y: auto;
}
</style>