import Vue from 'vue'
import App from './App.vue'

// Change the state of the child component and change it in the other sibling of the same parent file.
export const eventBus = new Vue({
  methods:{
    // We can add methods too in the eventBus as it is an instance of Vue only.
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
    // We can use eventBus to store some centralized code that you want to access from different places in your app
    // where we use this event.
    // Especially, when there's a code we don't want to duplicate in different places, but instead store centrally.
    // Here, we can store the data and NOT AS A FUNCTION, as an object, as it is a Vue instance.
    // So, this works as a centralized data storing platform for us. 
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});