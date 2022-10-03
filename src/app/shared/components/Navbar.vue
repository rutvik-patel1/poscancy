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
          <v-list-item> Logout </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" app clipped>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.path">
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
          v-model="selectedItem2"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title">
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
export default {
  data() {
    return {
      sidebar: this.$vuetify.breakpoint.smAndDown ? false : true,
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      selectedItem: 0,
      selectedItem2: null,
      menuItems: [
        { title: "Newsfeed", path: "/newsfeed", icon: "home" },
        { title: "Events", path: "/event", icon: "event" },
        { title: "Detailed Post", path: "/post/1", icon: "event" },
        { title: "Detailed Event", path: "/event/1", icon: "event" },
        { title: "Event Calander", path: "/event/calender", icon: "event" },
        { title: "Admin Users", path: "/admin/users", icon: "person" },
        { title: "Profile", path: "/profile", icon: "person" },
        { title: "Event Create", path: "/admin/event/create", icon: "create" },
        {
          title: "Event Response",
          path: "/admin/event/1/response",
          icon: "event",
        },
        { title: "chatroom", path: "/community/chat", icon: "chat" },
        { title: "Login", path: "/login", icon: "chat" },
        { title: "Rest Password", path: "/reset", icon: "chat" },
      ],
      items: [
        {
          action: "people",
          active: true,
          items: [
            { title: "#Books" },
            { title: "#Finance" },
            { title: "#Movies" },
            { title: "#Navratri2022" },
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
  },
};
</script>

<style></style>
