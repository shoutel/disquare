// Import App
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Options from './options'

Vue.prototype.$default = Options.default

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
