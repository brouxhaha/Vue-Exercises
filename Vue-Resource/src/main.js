import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-fde9b.firebaseio.com';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // POST creates new data
  if(request.method == 'POST'){
    // PUT overrides data
    request.method = 'PUT';
  }
  next(response => {
    // change the json method to return an object with a key because the PUT above changes it to non-object 
    response.json = () => {
      return {messages: response.body};
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
