<template>
  <div
    :class="{
      'ma-0 pa-2': $vuetify.breakpoint.smAndDown,
      'ma-0 pa-4': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-card-title> Persional Information </v-card-title>

    <div class="px-6">
      <v-divider></v-divider>
    </div>

    <div class="ma-6">
      <form @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-text-field
                v-model="name"
                :error-messages="errors"
                label="Name"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-text-field
                v-model="phoneNumber"
                :error-messages="errors"
                label="Phone Number"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-textarea
                v-model="address"
                :error-messages="errors"
                outlined
                label="Address"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="5">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birthdate"
                    label="Birthday date"
                    required
                    outlined
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="birthdate"
                  :active-picker.sync="activePicker"
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="5">
              <v-select
                v-model="gender"
                :items="items"
                :error-messages="errors"
                label="Gender"
                data-vv-name="Gender"
                required
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-textarea
                v-model="about"
                :error-messages="errors"
                outlined
                label="About"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-row justify="space-between">
                <v-btn @click="edit" outlined color="#0A66C2"
                  ><v-icon>mdi-pencil-outline</v-icon> edit
                </v-btn>
                <v-btn
                  class="mr-4 btn-color"
                  type="submit"
                  :disabled="invalid"
                  color="#0A66C2"
                >
                  submit
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Male", "Female", "Trasgender", "Other"],
    checkbox: null,
    activePicker: null,
    birthdate: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(birthdate) {
      this.$refs.menu.save(birthdate);
    },
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.birthdate = "";
      this.gender = "";
      this.address = "";
      this.about = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
* {
  background-color: white;
}

.btn-color {
  color: white;
}
</style>
