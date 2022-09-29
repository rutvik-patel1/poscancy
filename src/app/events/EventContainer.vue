<template>
  <v-container>
    <div style="max-width:800px">
      <v-card class="mx-5 my-3 pa-2 text-h5 primary" style="color:white;">Ongoing Events</v-card>
      <event-card></event-card>
      <event-card></event-card>
      <v-card class="mx-5 my-3 pa-2 text-h5 primary" style="color:white;">Past Events</v-card>
      <event-card></event-card>
      <event-card></event-card>
    </div>
    
  </v-container>
  
</template>

<script>
  import EventCard from './shared/EventCard.vue';
export default {
  components:{
    EventCard
  }
}
</script>

<style>

</style>