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
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    outlined
                    dense
                  ></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Item"
                    required
                    outlined
                    dense
                  ></v-select>

                  <v-file-input
                    label="File input"
                    outlined
                    dense
                  ></v-file-input>

                  <v-radio-group
                    v-model="row"
                    label="Select mode of transportation:"
                  >
                    <v-radio label="Option 1" value="radio-1"></v-radio>
                    <v-radio label="Option 2" value="radio-2"></v-radio>
                  </v-radio-group>

                  <v-textarea
                    outlined
                    name="textarea"
                    label="Suggestions"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                  ></v-textarea>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    @click="validate"
                  >
                    Submit!
                  </v-btn>
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
import { GetEventById } from "../services/events";
import CommentSection from "../../../posts/shared/components/CommentSec.vue";
export default {
  components: {
    CommentSection,
  },
  data: () => ({
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
  created() {
    GetEventById(this.$route.params.id).then((res) => {
      this.EventArr = res.data;
    });

  },
};
</script>
