import Vue from 'vue'
import App from './App.vue'
import './app/shared/services/registerServiceWorker'
import router from './app/app-router'
import store from './app/app-state'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
