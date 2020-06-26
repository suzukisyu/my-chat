import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import firebase from 'firebase'
import Chat from './components/Chat.vue'
import Home from './components/Home.vue'

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

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
