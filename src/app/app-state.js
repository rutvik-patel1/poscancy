import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showAlert:false,
    alertMsg:'Hello World',
    type:'success'
    //info, warning error
  },
  mutations: {
    alertState(state){
      state.showAlert = !state.showAlert
    },
    setMsg(state,msg){
      state.alertMsg = msg
    },
    setType(state,type){
      state.type = type
    },
    resetState(state){
      state.showAlert = false,
      state.alertMsg ="Hello World",
      state.type ='success'
    }
  },
  actions: {
    alert({commit},payload){
      const { type, message } = payload
      commit('setMsg',message)
      commit('setType',type)
      commit('alertState')
<<<<<<< HEAD
      setTimeout(() => {
        commit('resetState')
      },3000)
=======
      setTimeout(function(){
        commit('resetState')
      },2000)
>>>>>>> api/posts
    }
  },
  modules: {
  }
})
