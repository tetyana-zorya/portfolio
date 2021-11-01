import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from "firebase/app";
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD7oSVciqiV1zz0Ui-9h5UWgag3ZmX-yGg",
  authDomain: "pine-2b760.firebaseapp.com",
  projectId: "pine-2b760",
  databaseURL: 'https://pine-2b760-default-rtdb.firebaseio.com/',
  storageBucket: "pine-2b760.appspot.com",
  messagingSenderId: "1007005201993",
  appId: "1:1007005201993:web:0ba363783e4128bc97f198",
  measurementId: "G-7FZLCF35EP"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
 
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
