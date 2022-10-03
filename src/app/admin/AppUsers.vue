<template>
    <v-container fluid class="admin">
     <v-layout class="admin-header"> 
      <v-flex> 
       <h3> {{ "Users" }} </h3>
      </v-flex>
    </v-layout>
    <v-layout column mt-1>
       <v-flex align-self-end>
        <add-user></add-user>
       </v-flex>
    </v-layout>
    
  <v-data-table
      :headers="table_headers"
      :items="users"
      hide-default-header
      class="elevation-1"
      :items-per-page="5"
    >
       <template v-slot:header="{ props }">
        <thead> 
        <th v-for="(head,i) in props.headers" :key="i"
            class="text-center">
             <h2> {{ head.text }}</h2>   
        </th>
      </thead>
      </template>
       <template v-slot:body="{ items }">
        <tbody class="text-center">
        <tr
          v-for="user in items"  :key="user.id">

          <td> <span> {{ user.name }} </span></td>
          <td> <span> {{ user.email }} </span></td>
          <td> <span> {{ user.dob }} </span></td>
          <td> <span> {{ user.role }}  </span></td>
          <td> <v-btn color="error"> <v-icon> mdi-delete </v-icon> {{ user.action }} </v-btn> </td>
        </tr>
      </tbody>
       </template>
     </v-data-table>
    </v-container>
</template>
<script>
 import AddUser from './shared/AddUser.vue'; 
 export default {
    components:{AddUser},
    data() {
    return {
     table_headers:[{text:'Name',value:'name',align:'center'},
                    {text:'Email',value:'email',align:'center'},
                    {text:'DOB',value:'dob',align:'center'},
                    {text:'Role',value:'role',align:'center'},
                    {text:'Action',value:'action',align:'center'}  ],   
        users:[{ id:1,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'delete'},
           { id:2,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'},
           { id:3,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'},
           { id:4,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'},
           { id:5,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'},
           { id:6,name:'SudarshanB Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'},
           { id:7,name:'SudarshanB Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'},
           { id:8,name:'SudarshanB Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin',action:'Delete'} ] 
         }
   }
  }
  </script>
<style css scoped>
    .admin{  background-color: #ECEEFD; height:100%;}
    .admin-header{ background-color:#0A66C2; border-radius:0.6em; margin: auto;}
    thead { background-color:darkgray;}
    th,td { border: 1px solid gray;}
    th > h2 { font-size: x-large;} 
    td > span { font-size: 1.5em;}
    h3{  color: #ECEEFD; padding-top:-1.1em; padding-left:1.6em; font-size:2em; }

</style>