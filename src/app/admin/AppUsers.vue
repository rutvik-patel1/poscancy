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
       
    <v-simple-table mt-6 >
     <template v-slot#header>
       <thead>
        <tr>
          <th v-for="(header,i) in table_headers" :key="i"  
            class="text-center">
             <h2> {{ header.text }}</h2>   
        </th>
          
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          v-for="user in users" 
          :key="user.id"
          
          >
          <td> <span> {{ user.name }} </span></td>
          <td> <span> {{ user.email }} </span></td>
          <td> <span> {{ user.dob }} </span></td>
          <td> <span> {{ user.role }}  </span></td>
          <td > 
            <v-btn color="error"> <v-icon> mdi-delete </v-icon> {{ 'Delete'}} </v-btn> </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> 
    </v-container>
</template>
<script>
 import AddUser from './shared/AddUser.vue'; 
 export default {
    components:{AddUser},
    data() {
    return {
     table_headers:[{text:'Name',value:'Name',align:'center'},
                    {text:'Email',value:'Email',align:'center'},
                    {text:'DOB',value:'DOB',align:'center'},
                    {text:'Role',value:'Role',align:'center'},
                    {text:'Action',value:'Action',align:'center'},],   
        users:[{ id:1,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin'},
           { id:2,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin'},
           { id:3,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin'},
           { id:4,name:'Sudarshan Dey',email:'sudarshandey@bacancy.in',dob:'7/11/1997',role:'Admin'} ] 
         }
   },
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