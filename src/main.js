import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Header from './components/header';
Vue.component('compheader',Header);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
