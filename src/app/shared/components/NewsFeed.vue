<template>
  <div class="pt-4">
    <v-container>
      <v-row>
        <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
          <Article></Article>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="0" xs="0">
          <News></News>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Article from './Article.vue'
import News from './News.vue'

export default {
  name: "NewsFeed",
  components: {
    Article,
    News
  },
  data: () => ({
  }),
};
</script>

<style scoped>
.newsfeed-card {
  width: 100%;
}
</style>
