<template>
  <div outlined class="ma-1 pa-2">
    <v-card-title> Top Stories </v-card-title>

    <div class="px-6">
      <v-divider></v-divider>
    </div>

    <div class="d-flex flex-row"
    :class="{
      'flex-wrap': $vuetify.breakpoint.smAndDown,
    }"
    >
      <post-card></post-card>
      <post-card></post-card>
    </div>
  </div>
</template>

<script>
  import PostCard from '../../posts/shared/PostCard.vue';
export default {
  components:{
    PostCard
  },
  data() {
    return {
      options: [
        {
          icon: "delete",
          title: "Delete Post",
          subtitle: `Remove this post`,
        },
        { divider: true, inset: true },
        {
          icon: "save",
          title: "Save Post",
          subtitle: `Add this to your saved items`,
        },
      ],
      stories: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "John Smit",
          time: "1 hr Ago",
          post_image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          post_text:
            "relating to or dependent on charity; charitable an eleemosynar educational institution.relating to or dependent on charity; charitable an eleemosynary educational institution.relating to or dependent on charity; charitable an eleemosynary educational institution.relating to or dependent on charity; charitable an eleemosynary educational institution.relating to or dependent on charity; charitable",
        },
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "John Smit",
          time: "1 hr Ago",
          post_image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          post_text:
            "relating to or dependent on charity; charitable an eleemosynar educational institution.relating to or dependent on charity; charitable an eleemosynary educational institution.relating to or dependent on charity; charitable an eleemosynary educational institution.relating to or dependent on charity; charitable an eleemosynary educational institution.relating to or dependent on charity; charitable",
        },
      ],
    };
  },
};
</script>
