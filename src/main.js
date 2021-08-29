import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyBSWsFK4UMrGyUUNU6yJrjt2bjJQsCuGY4",
  authDomain: "vue-app-chat-75034.firebaseapp.com",
  databaseURL: "https://vue-app-chat-75034-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-app-chat-75034",
  storageBucket: "vue-app-chat-75034.appspot.com",
  messagingSenderId: "941072892169",
  appId: "1:941072892169:web:f600b33fa31b525a5093d8"
}
firebase.initializeApp(config)

new Vue({
  render: h => h(App),
}).$mount('#app')
