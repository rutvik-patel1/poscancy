<template>
    <v-row>
      <div class="col-12 col-sm-8">
        <event-card></event-card>
        <post-card></post-card>  
      </div>
      <div class="col-12 col-sm-4">hello2</div>
    </v-row>
  </template>
  
  <script>
  import PostCard from '../../posts/shared/PostCard.vue';
  import EventCard from '../../events/shared/EventCard.vue'
  export default {
    name: "HelloWorld",
    components:{
      PostCard,
      EventCard
    },
    data: () => ({
      
    }),
  };
  </script>
  