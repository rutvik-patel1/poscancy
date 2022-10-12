<template>
  <v-card class="mx-auto" tile>
    <v-img
      height="180px"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-col>
      <v-avatar size="100" style="position: absolute; top: 120px">
        <v-img
          :src="`https://a1drqkgw.directus.app/assets/` + userDetails.avatar"
        ></v-img>
      </v-avatar>
    </v-col>
    <div v-if="!this.$vuetify.breakpoint.xs">
      <v-list-item class="mt-1 pt-1">
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ userDetails.first_name }}</v-list-item-title
          >
          <v-list-item-subtitle>{{
            userDetails.last_name
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>Post</v-list-item-subtitle>
          <v-list-item-subtitle>{{ postCount }}</v-list-item-subtitle>
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
          <v-list-item-subtitle>{{ postCount }}</v-list-item-subtitle>
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

<script>
import { getUserDetails, getPostCount } from "../services/profile";
export default {
  data() {
    return {
      uid: null,
      userDetails: [],
      postCount: null
    };
  },
  methods: {
    getuserDetails() {
      getUserDetails(this.uid).then((res) => (this.userDetails = res.data));
      getPostCount(this.uid).then((res) => this.postCount = res)  ;
    },
  },
  mounted() {
    this.uid = this.$store.getters["authState/getUserId"];
    this.getuserDetails();
  },
};
</script>
