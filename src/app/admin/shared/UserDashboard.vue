<template>
  <div outlined class="ma-1 pa-4">
    <v-card-title> User </v-card-title>

    <div class="px-6">
      <v-divider></v-divider>
    </div>

    <div class="d-flex flex-row flex-wrap">
      <div 
      v-for="item in items"
        :key="item.name">
        <v-card class="pa-2 ma-4 rounded-xl" outlined>
          <v-container>
            <v-row>
              <v-col>
                <v-list-item-title>
                  <h4>{{ item.name }}</h4>
                </v-list-item-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-list-item-subtitle> {{ item.count }} </v-list-item-subtitle>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  components: {},
  data: () => ({
      items: [
        {
            name: 'Total User',
            count: 336
        },
        {
            name: 'Total Post',
            count: 1236
        },
      ]
    }),
};
</script>
