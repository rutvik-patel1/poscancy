<template>
  <div>
    <v-container
      :class="{
        'px-0': $vuetify.breakpoint.smAndDown,
        'px-15': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-card class="mx-1 my-1 pa-4 pb-1">
        <v-row>
          <v-col cols="7" lg="10" class="pl-4">
            <div
              class="d-block font-weight-bold text-h5"
              style="color: #0a66c2"
            >
              {{ EventArr.event_name }}
            </div>
          </v-col>
          <v-col cols="5" lg="2">
            <v-btn depressed>
              Follow
              <v-icon>add</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-1">
          <v-col class="pl-4">
            <div class="d-block text-caption">
              <strong
                >{{ EventArr.start_date }} - {{ EventArr.end_date }}</strong
              >
            </div>
          </v-col>
        </v-row>
        <v-img
          height="250"
          max-width="400"
          class="rounded-lg"
          :src="`https://a1drqkgw.directus.app/assets/` + EventArr.media"
        ></v-img>

        <v-card-text class="px-1">
          <div class="text--primary text-justify">
            {{ EventArr.description }}
          </div>
        </v-card-text>

        <v-divider class="mb-7"></v-divider>

        <v-row
          justify="center"
          :class="{
            'pa-0': $vuetify.breakpoint.smAndDown,
            'pa-5': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Participation Form</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                
              <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="submit"
                
              >
                <v-jsf v-model="model" outlined :schema="schema" />
                <v-btn type="submit">Submit</v-btn>
              </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-btn icon color="primary" tile>
              <v-icon>mdi-thumb-up-outline</v-icon>
              <div style="color: #777d74">Likes</div>
            </v-btn>
          </v-col>

          <v-col align="center">
            <v-btn icon color="primary">
              <v-icon>mdi-comment</v-icon>
              <div style="color: #777d74">Comments</div>
            </v-btn>
          </v-col>

          <v-col align="center">
            <v-btn icon color="primary">
              <v-icon>mdi-share</v-icon>
              <div style="color: #777d74">Share</div>
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-divider class="mx-4"></v-divider> -->
        <v-row>
          <v-col cols="11"  class="d-flex align-center">
            <v-text-field
              outlined
              dense
              label="Add comment"
              prepend-inner-icon="mdi-emoticon-happy-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="1" class="d-flex align-center">
            <v-icon>mdi-send</v-icon>
          </v-col>
        </v-row>

        <comment-section from="event"></comment-section>
      </v-card>
    </v-container>
  </div>
</template>

<style>
html {
  overflow-y: auto;
}
</style>

<script>
// import CommentSection from "../../../posts/shared/CommentSec.vue";
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import { GetEventById, sendFormData } from "../services/events";
import CommentSection from "../../../posts/shared/components/CommentSec.vue";
export default {
  async created() {
    await fetch("https://poke-api-f63a6-default-rtdb.firebaseio.com/data.json")
      .then((res) => res.json())
      .then((res) => (this.schema = res));

      GetEventById(this.$route.params.id).then((res) => {
      this.EventArr = res.data;
      this.schema = res.data.form_schema
      console.log(this.schema)
    });
    
  },
  components: {
    CommentSection,
    VJsf,
  },
  data: () => ({
    show: false,
    model: null,
    title: "Annual Goa Trip",
    time: "15 Sep 2022 to 21 Sep 2022",
    media: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    time1: "1 Sep 2022",
    time2: "5 Sep 2022",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita eaque minima atque! Rerum delectus iusto repellat, quae a et quibusdam quod cum maiores odit laboriosam, quia vitae distinctio illum?",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita eaque minima atque! Rerum delectus iusto repellat, quae a et quibusdam quod cum maiores odit laboriosam, quia vitae distinctio illum?",
    EventArr: [],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
    submit() {
      console.log("===>",this.model)
      const payload = {
        event_id: this.$route.params.id,
        form_response: this.model
      }
      sendFormData(payload).then((res)=>{
        console.log(res.data)
      })
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    
  },
};
</script>
