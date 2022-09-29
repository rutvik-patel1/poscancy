<template>
    <v-row>
      <div class="col-12 col-sm-8">
        <article-vue class="mx-5 my-6 pa-4 pb-0"></article-vue>
        <event-card></event-card>
        <post-card></post-card>  
      </div>
      <div class="col-12 col-sm-4">
        <news-vue class="mx-5 my-6 pa-4 pb-0"></news-vue>
      </div>
    </v-row>
  </template>
  
  <script>
    import ArticleVue from './Article.vue';
    import NewsVue from './News.vue';
  import PostCard from '../../posts/shared/PostCard.vue';
  import EventCard from '../../events/shared/EventCard.vue'
  export default {
    name: "HelloWorld",
    components:{
      PostCard,
      EventCard,
      ArticleVue,
      NewsVue
    },
    data: () => ({
      
    }),
  };
  </script>
  