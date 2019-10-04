import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Header from './components/header';
import footer from './components/footer';
import '@mdi/font/css/materialdesignicons.css';
Vue.component('compheader',Header);
Vue.component('compfooter',footer);



new Vue({

  vuetify,
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  render: h => h(App)
}).$mount('#app')