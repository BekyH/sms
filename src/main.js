import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import Header from './components/header';
import footer from './components/footer';
import register from './components/register';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';
import '@mdi/font/css/materialdesignicons.css';

Vue.component('compheader',Header);
Vue.component('compfooter',footer);
Vue.component('pregister',register);
Vue.component('home',home);
Vue.component('about',about);
Vue.component('contact',contact);
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
      {
        path:'/register',
        name:'Register',
        component:register
      },
      {
        path:'/home',
        name:'Home',
        component:home

      },
      {
        path:'/about',
        name:'About',
        component:about
      },
      {
        path:'/contact',
        name:'Contact',
        component:contact
      }

    ]
})

new Vue({

  vuetify,
  router,
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  render: h => h(App)
}).$mount('#app')