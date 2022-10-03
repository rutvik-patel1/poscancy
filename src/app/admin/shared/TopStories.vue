<template>
  <div outlined class="ma-1 pa-4">
    <v-card-title> Top Stories </v-card-title>

    <div class="px-6">
      <v-divider></v-divider>
    </div>

    <div class="d-flex flex-row flex-wrap mr-2">
      <v-card
        class="mx-5 my-12 pa-4 pb-0"
        max-width="550"
        v-for="item in stories"
        :key="item"
      >
        <v-container>
          <v-row class="mb-1">
            <v-col cols="2" xl="2" lg="1" md="1" sm="1" xs="1">
              <v-avatar size="40px" v-bind="attrs" v-on="on">
                <img alt="Avatar" :src="item.avatar" />
              </v-avatar>
            </v-col>
            <v-col cols="5" xl="5" lg="6" md="6" sm="6" xs="6">
              <div>
                <div class="d-block font-weight-bold">{{ item.name }}</div>
                <div class="d-block text-caption">{{ item.time }}</div>
              </div>
            </v-col>
            <v-col cols="5" xl="5" lg="6" md="6" sm="6" xs="6">
              <v-btn depressed>
                Follow
                <v-icon>add</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" xl="1" lg="1" md="1" sm="1" xs="1">
              <v-menu
                v-model="showMenu"
                absolute
                offset-y
                style="max-width: 600px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed icon v-bind="attrs" v-on="on">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>

                <v-list dense>
                  <template v-for="(item, index) in options">
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
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title
                          v-html="item.title"
                        ></v-list-item-title>
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

          <v-row>
            <v-img
              class="rounded-lg"
              :src="item.post_image"
            ></v-img>
          </v-row>

          <v-row class="px-1">
            <v-card-text>
              <div class="text--primary text-justify">
                {{ item.post_text }}
              </div>
            </v-card-text>
          </v-row>

          <v-row>
            <v-col class="d-flex justify-center">
              <v-btn icon color="primary" tile>
                <v-icon>mdi-thumb-up-outline</v-icon>
                <div style="color: #777d74">Likes</div>
              </v-btn>
            </v-col>

            <v-col class="d-flex justify-center">
              <v-btn icon color="primary">
                <v-icon>mdi-comment</v-icon>
                <div style="color: #777d74">Comments</div>
              </v-btn>
            </v-col>

            <v-col class="d-flex justify-center">
              <v-btn icon color="primary">
                <v-icon>mdi-share</v-icon>
                <div style="color: #777d74">Share</div>
              </v-btn>
            </v-col>
          </v-row>

          <v-row class="mt-2">
            <v-text-field
              outlined
              dense
              label="Add comment"
              prepend-inner-icon="mdi-emoticon-happy-outline"
            ></v-text-field>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
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
