<template>
    <v-container>
        
        <v-btn color="primary" @click="openDialog"> 
            <v-icon> mdi-plus </v-icon> 
            Add User </v-btn>


        <v-dialog v-model="open" 
                  transition="dialog-top-transition"
                  width="500">
            <v-card max-width="500" outlined>
             <v-card-title class="text-center justify-center">
                 {{ 'Add User'}}
             </v-card-title>
            <v-tabs v-model="tab" grow outlined>
                <v-tab v-for="item in items" :key="item">
                    {{ item }}
                </v-tab>
            </v-tabs> 
            <v-tabs-items v-model="tab">
               <v-tab-item v-for="item in items" 
                            :key="item" 
                            >
                    <v-card max-width="500" 
                            class="mx-auto" 
                            v-if="item.includes('Create')"
                            flat>
                         
                         <v-row  class="mx-5 mt-3" 
                                v-for="(index,email) in emails" :key="index"
                                >
                            <v-text-field 
                                type="Email"
                                placeholder="Email"
                                :rules="emailRules"
                                v-model="email[index]"
                                outlined
                                required dense/> 
                                <v-btn color="secondary" outlined
                        v-if="(emails.length-2) === index || (emails.length >= 0 && emails.length <=1 )"  
                                fab small dark 
                                   class="mx-2" @click="addEmail(email)"> 
                                <v-icon> mdi-plus </v-icon> 
                            </v-btn>
                                
                                <v-btn color="error" outlined
                                    v-else 
                                    fab small dark 
                                    class="mx-2" @click="removeEmail(index)"> 
                                <v-icon> mdi-delete </v-icon> 
                            </v-btn>
                            
                         </v-row>
                         <v-row  class="mx-5 mt-3 mb-3">
                            <v-btn color="primary"> 
                                  <v-icon> mdi-plus </v-icon> 
                             Add User </v-btn>
                            </v-row>
                    </v-card>
                    <v-card v-else
                            max-width="600" 
                            flat
                            class=" mx-auto mb-4" >
                        
                        <v-file-input flat 
                            show-size
                            prepend-icon="mdi-file"
                            placeholder="Add Excel or CSV File" />
                            <v-row  class="mx-5 mt-3 mb-3">
                            <v-btn color="primary"> 
                                  <v-icon> mdi-plus </v-icon> 
                             Add User </v-btn>
                            </v-row>     
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
      </v-dialog>
    </v-container>
   
</template>
<script>
    export default {
    data () {
      return {
        tab: null,email:'',valid:'false',open:false,
        emails:[this.email],emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
       ],
        items: ['Create User', 'Import User'],
       }
    },
    methods:{
        openDialog(){
           this.open = !this.open
        },
        addEmail(e){
            this.emails.push(e);
        },
        removeEmail(i){
            this.emails.splice(i,1);
        }
    }
  }
</script>