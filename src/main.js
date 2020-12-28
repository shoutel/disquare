// Import App
import Cookie from 'js-cookie'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Options from './options'
import listStyle from './store/listStyle'

Vue.prototype.$default = Options.default

const cookie = Cookie
listStyle.setTypeByCookie(cookie)
Vue.prototype.$default.listStyle = listStyle

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
