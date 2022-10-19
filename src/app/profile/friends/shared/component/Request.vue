<template>
    <div class="ma-4">
      <div
        class="d-flex justify-space-around mb-6 align-content-center flex-wrap"
      >
        <v-card
          v-for="item in items"
          :key="item.id"
          class="pa-2 ma-4 rounded-xl"
          outlined
        >
          <v-container>
            <v-row>
              <v-col>
                <v-list-item-avatar size="62">
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </v-col>
              <v-col>
                <div>
                  <v-row class="d-flex justify-center mb-2">
                    <h4>{{ item.title }}</h4>
                  </v-row>
                  <v-row>
                    <v-col>
                        <v-btn outlined color="#0A66C2"> Accept <v-icon class="ml-1">mdi-account-check</v-icon></v-btn>
                    </v-col>
                    <v-col>
                        <v-btn outlined color="#F24726"> Denied <v-icon class="ml-1">mdi-account-remove</v-icon> </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch",
        },
        {
          id: 2,
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Brunch",
        },
        {
          id: 3,
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Brunch",
        },
        {
          id: 4,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Brunch",
        },
        {
          id: 5,
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Brunch",
        },
        {
          id: 6,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch",
        },
      ],
    }),
  };
  </script>
  