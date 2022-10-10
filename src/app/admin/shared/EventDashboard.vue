<template>
    <div outlined class="ma-1 pa-4">
      <v-card-title> Events </v-card-title>
  
      <div class="px-6">
        <v-divider></v-divider>
      </div>
  
      <div class="d-flex flex-row flex-wrap">
        <div  v-for="event in events"
        :key="event.name">
          <v-card class="pa-2 ma-4 rounded-xl" outlined>
            <v-container>
              <v-row>
                <v-col>
                  <v-list-item-title>
                    <h4>{{ event.name }}</h4>
                  </v-list-item-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-list-item-subtitle> {{ event.count }} </v-list-item-subtitle>
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
      events: [
        {
            name: 'Past Events',
            count: 15
        },
        {
            name: 'Ongoing Events',
            count: 2
        },
        {
            name: 'Upcoming Events',
            count: 5
        }
      ]
    }),
  };
  </script>
  