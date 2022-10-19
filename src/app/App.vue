<template>
  <v-app>
    <v-alert
      border="left"
      dismissible
      style="z-index: 999; position: fixed; top: 70px; right: 10px"
      width="400px"
      :type="type"
      v-if="isAlert"
      >{{ message }}</v-alert
    >
    <router-view></router-view>
  </v-app>
</template>

<script>
import { appCookieStorage } from './shared/services';

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    isAlert() {
      return this.$store.state.showAlert;
    },
    type() {
      return this.$store.state.type;
    },
    message() {
      return this.$store.state.alertMsg;
    },
  },
  mounted(){
    let token = appCookieStorage.get('access_token');
    if(!token){
        this.$router.push('/login');
    }
  }
};
</script>


