import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Vue from 'vue';

import App from './App.vue';
import router from './router.js';


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/api/';  // the FastAPI backend

Vue.config.productionTip = false;

new Vue({
  data: {color: '#000000'},
  router,
  render: h => h(App)
}).$mount('#app')