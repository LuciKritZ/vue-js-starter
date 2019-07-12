import Vue from 'vue'
import App from './App.vue'

// creating filters globally that can be used anywhere i.e., in any template.
Vue.filter('toLowercase', (value) => {
  return value.toLowerCase();
});

// creating a global mixin that will be loaded in every single Vue instance and hence, every component.
Vue.mixin({
  created(){
    console.log("Global mixin created hook");
  }
});
// When you will open your console, you will find the three logs of the global mixin. Why?
// That's because we have new instance right under this code.
// So, 1. This Vue instance. 2. App.vue instance and 3. List.vue instance.
// Key takeaway: Use this with caution. It really affects everything. 
// This is the reason we typically use this for developing purposes only, where you don't really
// have a complete app. 

new Vue({
  el: '#app',
  render: h => h(App)
})