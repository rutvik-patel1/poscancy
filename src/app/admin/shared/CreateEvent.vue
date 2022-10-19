<template>
  <v-container key="a">
    <v-card class="mx-2 my-2 pa-1 pb-1 pb-15">
      <v-card-title>Create Event</v-card-title>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-form>
            <v-row class="mt-2 ml-2">
              <v-col>
                <v-text-field label="Event Name" dense outlined v-model="eventName"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-2 ml-2">
              <v-col>
                <v-dialog
                  ref="dialog1"
                  v-model="modal1"
                  :return-value.sync="date1"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date1"
                      label="Event Start Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date1" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal1 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog1.save(date1)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="date2"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date2"
                      label="Event End Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date2" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog2.save(date2)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row class="mt-2 ml-2">
              <v-col>
                <v-textarea
                  outlined
                  name="Description"
                  label="Event Description"
                  v-model="description"
                  ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col>
          <v-row class="mt-2 mr-2">
            <v-col>
              <v-file-input
                label="Add File"
                outlined
                dense
                prepend-icon="mdi-camera"
                @change="onFileChange"
                v-model="selectedFile"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row class="mt-2 mr-2">
            <v-col>
              <div
                style="height: 230px;border: 1px solid gray;margin: 10px;background-color: aliceblue;"
              >
              <div id="preview">
    <img v-if="url" :src="url" />
  </div>
            </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-card-title>Add Participation Form</v-card-title>
      <v-divider class="mb-2"></v-divider>
      <dyamic-form @getSchema="getSchema"></dyamic-form>

      <v-divider class="mb-2"></v-divider>
      <v-row class="mt-2 ml-2">
        <v-col>
          <v-btn color="primary" @click="postEvent">Create Event</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import DyamicForm from "./DyamicForm.vue";
import { createEvent } from "../../admin/shared/services/event"
export default {
  name: "CreateEvent",
  components: {
    DyamicForm,
  },
  data() {
    return {
      eventDate: [],
      eventName:"test",
      date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal1: false,
      modal2: false,
      description:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
      selectedFile:"",
      schema:{},
      url:null
    };
  },

  methods:{
    getSchema(data){
       this.schema = JSON.parse(JSON.stringify(data))
    }, 
    postEvent(){

      const formData = new FormData();
      formData.append('media', this.selectedFile);
      const data = {
         "media": formData,
        "description": this.description,
        "form_schema": this.schema,
        "start_date": this.date1,
        "end_date": this.date2,
        "event_name":this.eventName
      }
      createEvent(data).then((res)=>{
        console.log(res.data)
      })
    },
    onFileChange(e) {
      console.log(e)
      const file = e;
      this.url = URL.createObjectURL(file);
    }
  }
};
</script>

<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;
}

#preview img {
  max-width: 100%;
  max-height: 210px;
}
</style>