<template>
  <v-container fluid class="chat">
    <v-layout> 
      <v-flex> 
       <h1> {{ community_name }} </h1>
      </v-flex>
    </v-layout>
     <v-divider></v-divider> 
      <v-flex mx-3  v-for="(chat,i) in chats" :key="i">
       <v-row  v-if="chat.id!==id" class="row_width">
        <img src="../../../public/img/icons/profile.svg" height="60" />
        <v-layout class="chatMsgs" mx-3 mb-5 mt-5 >
          <v-flex ml-3> 
            <h3>{{ chat.user}} </h3>
            <span> {{ chat.message }}  </span> 
             <footer><small style="color:#777d74;"> {{ new Date().toUTCString() }} </small> </footer>
        </v-flex>
      </v-layout>
       </v-row>
      <v-row v-else class="myMsgs">
        <v-layout mb-2 mt-2 mr-2 class="chatMsgs">
        <v-flex ml-3 mr-3> 
             <h3 style="color:#0A66C2; font-size:90%;">{{ chat.user}} </h3>
             {{ chat.message }} 
             <footer><small  style="color:#777d74;"> {{ new Date().toUTCString() }} </small> </footer>
        </v-flex>
      </v-layout>
      <img src="../../../public/img/icons/profile.svg" height="60"  />
    </v-row>
          
    </v-flex>
   
     
      
       <v-layout row offset-1 mt-2 mr-2 :class="[(chats.length < 0)? fixedClass:initialClass]"> 
       <v-text-field  outlined dense class="mr-1">
          <template slot="append">
          <v-file-input dense prepend-icon="mdi-image" hide-input 
           class="file_input"> </v-file-input>
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
<style css scoped>
 .chat { background-color: #ECEEFD; height: 100%; width:110%;}
 .row_width { width:50%; }
  img { margin-top:1.6em;}
  .file_input{ position:relative; top:-0.3em; }
 h1{ 
  color: #0A66C2;  padding-top: 14px; padding-left:5px; float:top; 
   }
   h3 { color:#0A66C2; font-size:94%; }
 .chatBoxFixed { position: fixed; right:1px; left:3px; bottom:1em; }
 .chatBoxInitial { position: initial; right:1px; left:3px; bottom:1em; }
 .community { color: #0A66C2; font-weight: 300; font-size: 200%; 
              position:relative; top:-0.5em; left:1.5em; }
 .chatMsgs { background-color:#FFF; border-radius:0.5em;
             padding-left:1em; box-shadow: 1px 1px grey;
            font-size:120%; font-weight: 400; }
  .myMsgs { position: relative; width:50%; margin-left: auto; margin-top: auto;} 
</style>