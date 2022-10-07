<template>
  <div>
    <v-app-bar app color="white" clipped-left elevation="1">
      <v-btn text class="hidden-md-and-up ma-0" @click="click">
        <v-icon class="ma-0">menu</v-icon>
      </v-btn>
      <div
        class="d-flex align-cente"
        :class="{
          'ma-0': $vuetify.breakpoint.smAndDown,
          'mx-6': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-1"
          contain
          :src="require('../../../assets/poscancy.svg')"
          transition="scale-transition"
          width="40"
        />
        <div
          class="transition-swing shrink mt-1 hidden-sm-and-down primary--text font-weight-regular text-h5"
        >
          POSCANCY
        </div>
      </div>

      <v-autocomplete
        color="#fff"
        clearable
        deletable-chips
        solo
        :flat="$vuetify.breakpoint.smAndDown"
        class="my-auto"
        :class="{
          'ma-0': $vuetify.breakpoint.smAndDown,
          'mx-10': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <template #label>
          <span><v-icon>search</v-icon> <span> </span> Search</span>
        </template>
      </v-autocomplete>

      <v-btn text>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar size="36px" v-bind="attrs" v-on="on">
            <img
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            />
          </v-avatar>
          <v-btn class="hidden-sm-and-down" flat text v-bind="attrs" v-on="on">
            Robert john
          </v-btn>
        </template>
        <v-list>
          <v-list-item> Profile </v-list-item>
          <v-list-item v-on:click="logOut"> Logout </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" app clipped>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.path" exact-path>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.action"
        
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title" :to="child.path" exact-path >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { logout } from '../../auth/shared/services/auth';
import { appCookieStorage } from '../services';
export default {
  data() {
    return {
      sidebar: this.$vuetify.breakpoint.smAndDown ? false : true,
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      selectedItem: 0,
      selectedItem2: 0,
      menuItems: [
        { title: "Newsfeed", path: "/newsfeed", icon: "home" },
        { title: "Profile", path: "/profile", icon: "person" },
        { title: "Events", path: "/event", icon: "event" },
        { title: "Event Calander", path: "/event/calender", icon: "event" },
      ],
      items: [
        {
          action: "people",
          active: true,
          items: [
            { title: "#Books" , path:'/community/chat/1' },
            { title: "#Finance",path:'/community/chat/2' },
            { title: "#Movies",path:'/community/chat/3' },
            { title: "#Navratri2022",path:'/community/chat/4' },
          ],
          title: "community",
        },
      ],
    };
  },
  methods: {
    click() {
      this.sidebar = !this.sidebar;
    },
   async logOut(){
      await logout(appCookieStorage.get('refresh_token'));
      appCookieStorage.remove('refresh_token');
      this.$router.push('/login');
    }
  },
};
</script>

<style></style>
