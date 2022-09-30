<template>
  <v-card class="mx-auto" tile>
    <v-img
      height="180px"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-col>
      <v-avatar size="100" style="position: absolute; top: 120px">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-avatar>
    </v-col>
    <div v-if="!this.$vuetify.breakpoint.xs">
      <v-list-item class="mt-1 pt-1">
        <v-list-item-content>
          <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
          <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>Post</v-list-item-subtitle>
          <v-list-item-subtitle>50</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>Followers</v-list-item-subtitle>
          <v-list-item-subtitle>50</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>Following</v-list-item-subtitle>
          <v-list-item-subtitle>50</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-else>
      <v-list-item class="mt-1 pt-1">
        <v-list-item-content>
          <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
          <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Post</v-list-item-subtitle>
          <v-list-item-subtitle>50</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>Followers</v-list-item-subtitle>
          <v-list-item-subtitle>50</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>Following</v-list-item-subtitle>
          <v-list-item-subtitle>50</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-card>
</template>