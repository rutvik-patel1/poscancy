<template>
  <div class="ma-4">
    <v-card outlined class="ma-6">
        <Article></Article>
      </v-card>
      <post-card class="ma-6"></post-card>
  </div>
</template>

<script>
import Article from "../../../shared/components/Article.vue";
import PostCard from '../../../posts/shared/PostCard.vue'
export default {
  name: "Photos",
  components: {
    Article,
    PostCard
  },
};
</script>
