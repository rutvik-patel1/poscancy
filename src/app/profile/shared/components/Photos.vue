<template>
  <div>
    <v-card outlined>
        <Article></Article>
      </v-card>
      <post-card></post-card>
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
