<template>
  <div class="newsfeed-container">
    <div  v-if="mobile">
      <v-row>
        <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
          <Article></Article>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
          <Article></Article>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="0" xs="0">
          <News></News>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
import News from "./News.vue";

export default {
  name: "NewsFeed",
  components: {
    Article,
    News,
  },
  data: () => ({}),
  computed: {
  mobile() {
    return this.$vuetify.breakpoint.xs;
  },
}
};
</script>

<style scoped>
.newsfeed-container {
  padding: 20px;
}
</style>
