<template>
  <v-card :loading="loading" class="mx-5 my-12 pa-4 pb-0">
    <v-row class="mb-1">
      <v-col cols="2"  lg="1">
        <v-avatar size="45px" v-bind="attrs" v-on="on">
          <img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          />
        </v-avatar>
      </v-col>
      <v-col cols="4"  lg="8" class="pl-4">
        <div class="d-block font-weight-bold">John Smit</div>
        <div class="d-block text-caption">1 hr Ago</div>
      </v-col>
      <v-col cols="6"  lg="3">
        <v-btn depressed>
          Follow
          <v-icon>add</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-img
      height="250"
      class="rounded-lg"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-text class="px-1">
      <div class="text--primary text-justify">
        relating to or dependent on charity; charitable "an eleemosynary
        educational institution."relating to or dependent on charity; charitable
        "an eleemosynary educational institution."relating to or dependent on
        charity; charitable "an eleemosynary educational institution."relating
        to or dependent on charity; charitable "an eleemosynary educational
        institution."relating to or dependent on charity; charitable
      </div>
    </v-card-text>

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
    <v-text-field
      class="mt-2"
      outlined
      dense
      label="Add comment"
      prepend-inner-icon="mdi-emoticon-happy-outline"
    ></v-text-field>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
  html { overflow-y: auto }

</style>