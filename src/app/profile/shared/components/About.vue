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
      <v-form ref="observer" 
        v-model="valid" 
        @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" xl="5" lg="5" md="5" sm="6" xs="6">
              <v-text-field
                v-model="firstName"
                label="First Name"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" xl="5" lg="5" md="5" sm="6" xs="6">
              <v-text-field
                v-model="lastName"
                label="Last Name"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-text-field
                v-model="phoneNumber"
                label="Phone Number"
                :rules="phoneRules"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-textarea
                v-model="address"
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
                      Date.now() - new Date().getTimezoneOffset() * 6000
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
                outlined
                label="About"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
              <v-row justify="space-between">
                <v-btn outlined color="#0A66C2"
                  ><v-icon>mdi-pencil-outline</v-icon> edit
                </v-btn>
                <v-btn class="mr-4 btn-color" type="submit" color="#0A66C2">
                  submit
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import { getProfile,updateProfile } from '../services/profile'
export default {
  components: {},
  data: () => ({
    valid:false,
    userId:"",
    firstName : "",
    lastName : "",
    phoneNumber: "",
    email: "",
    emailRules: [
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    phoneRules:[
     (val) => /^\d{10}$/.test(val) || "Enter valid phone no."
    ] , 
    address: "",
    gender: "",
    about: "",
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
      const data = {
        email:this.email,
        first_name:this.firstName,
        last_name:this.lastName,
        mobile:this.phoneNumber,
        gender:this.gender,
        description:this.about,
        dob:this.birthdate,
        location:this.address
      }
        if(this.valid){
          updateProfile(this.userId,data).then(() => {
          this.$store.dispatch('alert',{
            type:'success',message:'Profile update successful.'
         });
         this.$router.go();
      });
        }
       this.clear();
    },
    clear() {
      this.firstName = "";
      this.lastName = "";
      this.phoneNumber = "";
      this.email = "";
      this.birthdate = "";
      this.gender = "";
      this.address = "";
      this.about = "";
      this.$refs.observer.reset();
    },
   async getUserProfile(){
      this.userId = localStorage.getItem('Id');
      console.log(this.userId);
      let { data } = await getProfile(this.userId);
      this.email=data.email;
      this.firstName = data.first_name;
      this.lastName = data.last_name;
      this.phoneNumber = data.mobile;
      this.address = data.location;
      this.birthdate = data.dob;
      this.about = data.description;
      this.gender = data.gender;
      },
  },
  mounted(){
    this.getUserProfile();  
  }
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
