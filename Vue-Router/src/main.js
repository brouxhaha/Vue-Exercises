import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' /* overrides the hash in url - need to configure the server to work Vue-Router docs describe how to do so */
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
