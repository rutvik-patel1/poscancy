<template>
  <v-container fluid class="bg">
    <v-layout row wrap class="login">
      <v-flex class="text-xs-center" style="text-align: center" mt-3>
        <h1>
          <img src="../../../public/img/icons/image-bg.png" width="10%" />
          <span> {{ title.h1 }} </span>
        </h1>
        <h3>{{ title.h3 }}</h3>
      </v-flex>

      <v-flex xs11 sm6 offset-sm3 mt-2>
        <v-form v-model="valid" ref="form">
          <v-layout column>
            <v-flex>
              <label> {{ title.email }}</label>
              <v-text-field
                type="Email"
                outlined
                :rules="emailRules"
                class="form-control"
                required
                dense
                v-model="email"
              />
            </v-flex>
            <v-flex mt-1>
              <label> {{ title.passwd }} </label>
              <v-text-field
                type="Password"
                outlined
                :rules="passwordRules"
                class="form-control"
                required
                dense
                v-model="password"
              />
            </v-flex>
            <v-layout mb-2 column>
              <v-flex shrink align-self-end>
                <router-link class="text-decoration-none" to="/reset">
                  Forget Password?
                </router-link>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-layout column>
                <v-flex offset-1>
                  <v-checkbox v-model="checked" label="Remember Me" />
                </v-flex>
              </v-layout>
              <v-layout column mt-2>
                <v-flex offset-2 align-self-center>
                  <v-btn
                    class="m-6"
                    color="primary"
                    @click.prevent="validate"
                    type="submit"
                    >{{ btn.text1 }}</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-layout>
            <v-flex class="text-xs-center" mt-3 mb-1>
              <span class="pr-3"> <b> Didn't have an account? </b> </span>
              <v-btn color="indigo" outlined type="submit">
                {{ btn.text2 }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import jsCookie from 'js-cookie';
import { mapActions } from 'vuex';
import { appCookieStorage } from '../shared/services';
import { login,loggedInUser } from './shared/services/auth';
export default {
  data() {
    return {
      title: {
        h1: "POSCANCY",
        h3: "Login",
        email: "Email",
        passwd: "Password",
      },
      btn: { text1: "Sign In", text2: "Google SignIn" },
      email: "",
      password: "",
      valid: false,
      checked: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be more than 6 characters",
      ],
    };
  },
  methods: {
    ...mapActions('authState',['setUserId']),
    validate() {
      this.$refs.form.validate();
      if(this.valid){
          this.login();
        }
      },
    async login(){
      let res = await login(this.email,this.password);
      appCookieStorage.set('access_token',res.data.access_token);
      jsCookie.set('refresh_token',res.data.refresh_token)
      let user = await loggedInUser(res.data.access_token);
      console.log(user);
      localStorage.setItem('Id',user.data.id);
      this.$store.dispatch('authState/setUserId',{userId:user.data.id});
      this.$router.push('/');
      await this.$store.dispatch('alert',{
        type:'success',message:'User logged in successful.'
        });
    },
    async autoLogin(){
    let token = appCookieStorage.get('access_token');
    if(token){
      this.$router.push('/');
      await this.$store.dispatch('alert',{
        type:'info',message:'Already logged in.'
        });
    }
  }
 },
 mounted(){
// this.autoLogin();  
}
};
</script>
<style css scoped>
.login {
  margin-left: 30%;
  margin-top: 5%;
  padding-bottom: 3%;
  margin-right: 30%;
  background-color: #fff;
  border-radius: 3em;
  align-content: center;
}
.bg {
  background: linear-gradient(45deg, #0a66c2 0%, #777d74 100%);
  height: 100%;
  width: 200%;
}
h1 {
  color: #0a66c2;
  padding-top: 14px;
  padding-left: 5px;
  float: top;
}
h1 > span {
  position: relative;
  top: -1em;
}
h3 {
  font-size: 160%;
  font-weight: 500;
}
</style>