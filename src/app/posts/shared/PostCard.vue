<template>
  <v-card
    :loading="loading"
    class="pa-4 pb-0"
    :class="{
      'mx-1 my-6': $vuetify.breakpoint.smAndDown,
      'mx-5 my-12': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-row class="mb-1">
      <v-col cols="2" lg="1">
        <v-avatar size="45px" v-bind="attrs" v-on="on">
          <img alt="Avatar" :src="avatar" />
        </v-avatar>
      </v-col>
      <v-col cols="4" lg="7" class="pl-4">
        <div class="d-block font-weight-bold">{{ author }}</div>
        <div class="d-block text-caption">{{ time }}</div>
      </v-col>
      <v-col cols="4" lg="3">
        <v-btn depressed>
          Follow
          <v-icon>add</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2" lg="1">
        <v-menu v-model="showMenu" absolute offset-y style="max-width: 600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed icon v-bind="attrs" v-on="on">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>

          <v-list dense>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-icon>
                  <!-- <v-img :src="item.icon"></v-img> -->
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <v-img height="250" class="rounded-lg" :src="media"></v-img>

    <v-card-text class="px-1">
      <div class="text--primary text-justify">
        {{ caption }}
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
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      author: "John Smit",
      time: "John Smit",
      media: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      caption:
        "relating to or dependent on charity charitable an eleemosynary educational institution relating to or dependent on charity charitable an eleemosynary educational institution. relating to or \n dependent on charity charitable an eleemosynary educational \n institution relating to or dependent on charity charitable an eleemosynary educational institution relating to or dependent on \n charity charitable",
      items: [
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
    };
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
</style>