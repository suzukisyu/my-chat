import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBkX2fJ-0qZydsTn68QSV3AWXmsQhCO_5o",
  authDomain: "my-chat-backend.firebaseapp.com",
  databaseURL: "https://my-chat-backend.firebaseio.com",
  projectId: "my-chat-backend",
  storageBucket: "my-chat-backend.appspot.com",
  messagingSenderId: "949948022301",
  appId: "1:949948022301:web:25ce515a0e03a07cd190f4"
}
firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')
