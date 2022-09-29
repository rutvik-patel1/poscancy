<template>
  <div>
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        class="woo"
        style="overflow: visible; position: relative"
      >
        <v-avatar rounded width="100px" class="pa-1 user-photo" height="100px">
          <img
            width="100"
            height="100"
            src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          />
        </v-avatar>
      </v-img>
      <div class="text-center">
        <h3 class="mt-16">Robert</h3>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.user-photo {
  position: absolute;
  top: 80%;
  left: 45%;
  text-align: center;
  bottom: 0px;
}
</style>
