import Vue from 'vue'
import App from './App.vue'
// Importing the store in the main file.
import {store} from './components/store/store.js'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
