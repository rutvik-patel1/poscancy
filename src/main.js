import Vue from 'vue'
import App from './app/App.vue'
import './app/shared/services/registerServiceWorker'
import router from './app/app-router'
import store from './app/app-state'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
// eslint-disable-next-line no-undef
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
