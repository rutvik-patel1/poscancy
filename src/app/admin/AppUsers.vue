<template>
  <v-container fluid class="admin">
    <v-layout class="admin-header">
      <v-flex>
        <h3>{{ "Users" }}</h3>
      </v-flex>
    </v-layout>
    <v-layout column mt-1>
      <v-flex align-self-end>
        <add-user></add-user>
      </v-flex>
    </v-layout>

    <v-data-table
      :headers="table_headers"
      :items="users"
      class="elevation-1"
      :items-per-page="5"
    >

    <template v-slot:top>
      <v-toolbar
        flat
      >
       
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import AddUser from "./shared/AddUser.vue";
export default {
  components: { AddUser },
  data() {
    return {
      dialogDelete: false,
      editedIndex:0,
      editedItem:"",
      table_headers: [
        { text: "Name", value: "name", align: "center" },
        { text: "Email", value: "email", align: "center" },
        { text: "DOB", value: "dob", align: "center" },
        { text: "Role", value: "role", align: "center" },
        { text: "Action", value: "actions", align: "center" },
      ],
      users: [
        {
          id: 1,
          name: "Sudarshan Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 2,
          name: "Sudarshan Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 3,
          name: "Sudarshan Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 4,
          name: "Sudarshan Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 5,
          name: "Sudarshan Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 6,
          name: "SudarshanB Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 7,
          name: "SudarshanB Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
        {
          id: 8,
          name: "SudarshanB Dey",
          email: "sudarshandey@bacancy.in",
          dob: "7/11/1997",
          role: "Admin",
        },
      ],
    };
  },
  methods:{
    deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      close () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },
  }
};
</script>
<style css scoped>
.admin {
  background-color: #eceefd;
  height: 100%;
}
.admin-header {
  background-color: #0a66c2;
  border-radius: 0.6em;
  margin: auto;
}
thead {
  background-color: darkgray;
}
th,
td {
  border: 1px solid gray;
}
th > h2 {
  font-size: x-large;
}
td > span {
  font-size: 1.5em;
}
h3 {
  color: #eceefd;
  padding-top: -1.1em;
  padding-left: 1.6em;
  font-size: 2em;
}
</style>