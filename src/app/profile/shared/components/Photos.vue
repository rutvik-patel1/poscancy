<template>
  <div class="ma-4">
    <v-card elevation="2" outlined>
      <v-card outlined class="ma-6">
        <Article></Article>
      </v-card>
      <v-card outlined class="ma-6">
        <News></News>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import Article from "../../../shared/components/Article.vue";
import News from "../../../shared/components/News.vue";
export default {
  name: "Photos",
  components: {
    Article,
    News
  },
};
</script>
