import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios base
import './libs/axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
