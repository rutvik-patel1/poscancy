<template>
    <div class="ma-4">
      <v-card
        outlined
        class="d-flex justify-space-around mb-6 align-content-center flex-wrap"
      >
        <v-card
          v-for="item in items"
          :key="item"
          class="pa-2 ma-4"
          outlined
        >
          <v-container>
            <v-row>
              <v-col>
                <v-list-item-avatar size="62">
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </v-col>
              <v-col class="d-flex align-center">
                <div>
                  <v-row class="d-flex justify-space-around mb-2">
                    <h4>{{ item.title }}</h4>
                  </v-row>
                  <v-row>
                    <v-btn outlined color="#0A66C2"><v-icon>mdi-check</v-icon> Friend</v-btn>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Brunch",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Brunch",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Brunch",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Brunch",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch",
        },
      ],
    }),
  };
  </script>
  