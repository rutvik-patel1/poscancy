<template>
  <v-container>
    <v-btn color="primary" @click="openDialog">
      <v-icon> mdi-plus </v-icon>
      Add User
    </v-btn>

    <v-dialog v-model="open" transition="dialog-top-transition" width="500">
      <v-card max-width="500" outlined>
        <v-card-title class="text-center justify-center">
          {{ "Add User" }}
        </v-card-title>
        <v-tabs v-model="tab" grow outlined>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card
              max-width="500"
              class="mx-auto"
              v-if="item.includes('Create')"
              flat
            >
              <v-row class="mx-5 mt-3">
                <v-col cols="5">
                  <v-text-field
                    type="email"
                    placeholder="Email"
                    v-model="email"
                    :rules="emailRules"
                    outlined
                    required
                    dense
                  />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    type="password"
                    placeholder="password"
                    v-model="password"
                    outlined
                    required
                    dense
                  />
                </v-col>
                <v-col cols="2">
                  <v-btn
                    color="secondary"
                    outlined
                    fab
                    small
                    dark
                    @click="addEmail()"
                  >
                    <v-icon> mdi-plus </v-icon>
                  </v-btn>
                  <!-- <v-btn
                    color="error"
                    outlined
                    v-else
                    fab
                    small
                    dark
                    class="mx-2"
                    @click="removeEmail(index)"
                  >
                    <v-icon> mdi-delete </v-icon>
                  </v-btn> -->
                </v-col>
              </v-row>
              <v-row class="mx-5 mt-3 mb-3">
                <ul>
                  <li v-for="item in credential" :key="item">
                    {{ item.email }} : {{ item.password }}
                  </li>
                </ul>
              </v-row>
              <v-row class="mx-5 mt-3 mb-3">
                <v-btn color="primary">
                  <v-icon> mdi-plus </v-icon>
                  Add User
                </v-btn>
              </v-row>
            </v-card>
            <v-card v-else max-width="600" flat class="mx-auto mb-4">
              <v-file-input
                flat
                show-size
                prepend-icon="mdi-file"
                placeholder="Add Excel or CSV File"
                v-model="selectedFile"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
              <v-row class="mx-5 mt-3 mb-3">
                <v-btn color="primary" @click="importFile">
                  <v-icon> mdi-plus </v-icon>
                  Add User
                </v-btn>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { httpClient } from "../../shared/services";
// import { importUser } from './services/users';
export default {
  data() {
    return {
      tab: null,
      email: "",
      valid: "false",
      open: false,
      emails: [this.email],
      password: "",
      credential: [],
      selectedFile: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      items: ["Create User", "Import User"],
    };
  },
  methods: {
    openDialog() {
      this.open = !this.open;
    },
    addEmail() {
      this.credential.push({ email: this.email, password: this.password });
      this.email = "";
      this.password = "";
    },
    removeEmail(i) {
      this.emails.splice(i, 1);
    },
    importFile() {
      var data = new FormData();
      data.append("file", this.selectedFile);

      var config = {
        method: "post",
        url: "https://a1drqkgw.directus.app/utils/import/directus_users",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };
      httpClient(config).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>