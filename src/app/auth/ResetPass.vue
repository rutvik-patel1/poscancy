<template>
  <v-container fluid class="bg"> 
    <v-layout row wrap  class="login">
      <v-flex  class="text-xs-center" style="text-align:-webkit-center;"  mt-3>
        <h1>
        <img src="../../../public/img/icons/image-bg.png" 
             width="12%"/>
        <span> {{  title.h1 }} </span> </h1>
         <h3 > {{ title.h3 }} </h3>
       </v-flex>
    
  <v-flex xs11 sm6 offset-3>
    <v-form v-model="valid" ref="form">
        <v-layout column>
            <v-flex>      
              <label> {{ text.email }}</label>
              <v-text-field 
                    type="Email"
                    outlined
                    :rules="emailRules"
                    class="form-control" 
                    v-model="email"
                    required dense /> 
            </v-flex>
        <v-flex mt-1> 
          <label> {{ text.pass1 }} </label>
          <v-text-field type="Password" 
                outlined
                :rules="passwordRules"
                class="form-control" 
                v-model="pass1"
                required dense/>  
        </v-flex>
        <v-flex mt-1> 
          <label> {{ text.pass2 }} </label>
          <v-text-field type="Password" 
                outlined
                :rules="confPasswordRules"
                class="form-control" 
                v-model="pass2"
                required  dense/>  
        </v-flex>
        <v-layout> 
          <v-flex >
              <v-btn block medium 
                    color="primary" 
                    @click.prevent="validate"
                    type="submit"> 
               {{ text.btn }}</v-btn>
         </v-flex>
      </v-layout>  
    </v-layout>
       
   </v-form>
  </v-flex>  
   </v-layout>
   </v-container>
</template>
<script>
    export default {
        data() {
    return {
    title: { h1:"POSCANCY",h3:"Reset Password"},
    text: { email:"Email",pass1:"Password",pass2:"Confirm Password",btn:"Reset Password"},
    email: "",pass1: "",pass2:"",
    valid:true,
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters',
      ],  
    confPasswordRules: [
        v => !!v || 'Confirm Password is required',
        v => (this.pass1 === v) || 'Both Passwords must be same',
      ],
     };
   },
   methods:{
    validate() { 
        this.$refs.form.validate(); }
   }
}
</script>
<style css scoped>
  .login { 
      margin-left: 23%; margin-top: 5%; padding-bottom: 3%; 
        margin-right: 23%; background-color: #ECEEFD;
      border-radius:7em; align-content: center;}
      .bg{ background: linear-gradient(45deg, #0A66C2 0%, #777d74 100%); height:100%; width:200%;}
    h1{ 
       color: #0A66C2; 
       padding-top: 14px;
       padding-left:5px;
       float:top; }
    h1 > span { position: relative; top:-1em;} 
    h3{ font-size: 160%; font-weight: 500;}  
</style>