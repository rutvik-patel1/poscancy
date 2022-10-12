<template>
    <div  :class="{
            'ma-0 pa-2': $vuetify.breakpoint.smAndDown,
            'ma-0 pa-4': $vuetify.breakpoint.mdAndUp,
          }">
      <div
        class="d-flex justify-space-around mb-6 align-content-center flex-wrap"
      >
        <v-card
          v-for="item in items"
          :key="item"
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
              <v-col class="d-flex align-center">
                <div>
                  <v-row class="d-flex justify-space-around mb-2">
                    <h4>{{ item.title }}</h4>
                  </v-row>
                  <v-row>
                    <v-btn outlined color="#0A66C2"><v-icon>mdi-account-check</v-icon>send request</v-btn>
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
  