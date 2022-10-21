<template>
  <v-container>
    <v-card class="ma-4 pa-3">
      <div>
        <h2 class="">{{ title }}</h2>
      </div>
      <v-divider></v-divider>
      <v-card outlined>
        <v-data-table
          :headers="headers"
          :items="data"
          :items-per-page="10"
        ></v-data-table>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>

import { getEventResponse } from './services/event';

export default {
  data() {
    return {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eosexplicabo, illum architecto deserunt perferendis sint maiores, repudiandae tenetur quae fugiat est nisi aperiam, velit accusantium odit ipsa eaque quam officia!",
      title: "Goa Trip",
      headers: [
        
      ],
      data:[]
    };
  },
  created(){
    this.getData()
  },
  methods: {
     getData(){
      getEventResponse(this.$route.params.id).then((res)=>{
        console.log("res",res.data)
        const data = res.data
        data.forEach((each)=> {

          // this.headers = [{'text': 'UserID', "value": 'id' }]
          this.headers = []
          each.form_response.user = each.user_created
          this.data.push(each.form_response)
          Object.keys(each.form_response).forEach((item)=>{
            // if(Array.isArray(each.form_response[item]))
            this.headers.push({ 'text':item ,"value":item })
          })
        })
        console.log(JSON.parse(JSON.stringify(this.headers)))
      })
     } 
  },
};
</script>
<style>
</style>