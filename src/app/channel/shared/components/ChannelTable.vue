<template>
  <v-data-table
    :headers="headers"
    :items="channels"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar >
        <v-toolbar-title>Channel List</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              <v-icon>mdi-plus</v-icon> create channel
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Channel Name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item, item.id)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item, item.id)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="getChannels"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import {
  getAllChannels,
  postChannel,
  editChannel,
  deleteChannel,
} from "../services/channel";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Channel", value: "name" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    channels: [],
    editedIndex: -1,
    editId: 0,
    deleteId: 0,
    editedItem: {
      name: "",
    },
    defaultItem: {
      name: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Create Channel" : "Edit Channel";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item, id) {
      this.editId = id;
      this.editedIndex = this.channels.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item, id) {
      this.deleteId = id;
      console.log(this.deleteId);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      deleteChannel(this.deleteId)
        .then(() => {
          this.getChannels();
        })
        .catch(async () => {
          await this.$store.dispatch("alert", {
            type: "error",
            message: "Loaded channels failed !!!",
          });
        });
      this.dialogDelete = false;
    },

    close() {
      this.dialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    save() {
      if (this.editedIndex > -1) {
        editChannel(this.editId, this.editedItem)
          .then(() => {
            this.getChannels();
          })
          .catch(async () => {
            await this.$store.dispatch("alert", {
              type: "error",
              message: "Loaded channels failed !!!",
            });
          });
      } else {
        postChannel(this.editedItem)
          .then(() => {
            this.getChannels();
          })
          .catch(async () => {
            await this.$store.dispatch("alert", {
              type: "error",
              message: "Loaded channels failed !!!",
            });
          });
      }
      this.close();
    },

    getChannels() {
      getAllChannels()
        .then((res) => {
          this.channels = res.data;
        })
        .catch(async () => {
          await this.$store.dispatch("alert", {
            type: "error",
            message: "Loaded all events failed !!!",
          });
        });
    },
  },
  created() {
    this.getChannels();
  },
};
</script>
