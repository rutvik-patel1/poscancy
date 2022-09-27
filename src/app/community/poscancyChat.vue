<template>
  <v-container fluid class="chat">
    <v-layout> 
      <v-flex> 
       <h1> {{ community_name }} </h1>
      </v-flex>
    </v-layout>
     <v-divider></v-divider> 
      <v-flex mx-3  v-for="(chat,i) in chats" :key="i">
       <v-row  v-if="chat.id!==id" style="width:50%">
        <img src="../../../public/img/icons/profile.svg" />
        <v-layout class="chatMsgs" mx-3 mb-5 mt-5 >
          <v-flex ml-3> 
            <h3 style="color:#0A66C2; ">{{ chat.user}} </h3>
             {{ chat.message }} 
             <footer> {{ new Date().toUTCString() }}</footer>
        </v-flex>
      </v-layout>
       </v-row>
      <v-row v-else style="width:50%;" class="myMsgs">
        <v-layout mb-2 mt-2 mr-2 class="chatMsgs">
        <v-flex ml-3 mr-3> 
             <h3 style="color:#0A66C2;">{{ chat.user}} </h3>
             {{ chat.message }} 
             <footer> {{ new Date().toUTCString() }}</footer>
        </v-flex>
      </v-layout>
      <img src="../../../public/img/icons/profile.svg" />
    </v-row>
          
    </v-flex>
   
     
      
       <v-layout row offset-1 mr-2 :class="[(chats.length < 0)? fixedClass:initialClass]"> 
       <v-text-field  outlined dense class="mr-1">
          <template slot="append">
          <v-file-input  prepend-icon="mdi-image" hide-input 
           style="position:relative; top:-0.5em;"> </v-file-input>
          <v-icon class="material-icons" > mood </v-icon>
          </template>
        </v-text-field>   
         <v-btn large  color="primary">
          <v-icon class="material-icons mr-1">send</v-icon>
          Send </v-btn>
       </v-layout>
    
  </v-container>
</template>
<script>
  export default {
    data() {
    return {
     community_name:"#Finance",id:1,
     fixedClass:'chatBoxFixed',initialClass:'chatBoxInitial',
     chats:[
      {id:1,user:'User1',message:'Poscancy chat'},{id:2,user:'Admin',message:'Welcome to poscancy chat'},
      {id:3,user:'User2',message:'Lets Exploore......'},{id:1,user:'User1',message:'Ack & Responded...'},
      {id:3,user:'User2',message:'Lets Exploore......'},{id:1,user:'User1',message:'Ack & Responded...'},
    { id:4, user:'User3', message:'Ok Lets proceed Goooooooooo goooooooooooooo.... ' } ]
    }
   },
  }
</script>
<style>
 .chat { background-color: #ECEEFD; height: 100%; width:110%;}
 .chatBoxFixed { position: fixed; right:1px; left:3px; bottom:1em; }
 .chatBoxInitial { position: initial; right:1px; left:3px; bottom:1em; }
 .community { color: #0A66C2; font-weight: 300; font-size: 200%; 
              position:relative; top:-0.5em; left:1.5em; }
 .chatMsgs { background-color:#FFF; border-radius:0.5em;
             padding-left:1em; box-shadow: 1px 1px grey;
            font-size:120%; font-weight: 400; }
  .myMsgs { position: relative; margin-left: auto; margin-top: auto;} 
</style>