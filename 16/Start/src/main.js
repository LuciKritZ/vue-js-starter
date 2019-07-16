import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

// Using Vue router for routing
Vue.use(VueRouter);

// If we use mode: 'history', it will load the pages correctly without the router configured, but it will reload
const router = new VueRouter(
  {
    routes: routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
      // We can use scrollBehaviour to scroll the section of the page when needed.
      // The arguments will be to, from and the savedPosition
      // return{
      //   x: 0,
      //   y: 700
      // };
      // We can either return the coordinates or we can simply give the selector
      // Or we can use the selector by checking if the the page has the hash id or not
      if(savedPosition){
        return savedPosition;
      }
      // This will return the saved position
      if(to.hash){
        return {
          selector: to.hash
        };
      };
      return{
        x: 0,
        y: 0
      };
      // So, now we will be able to navigate through the hash or the id given by us.
    }
  }
);

router.beforeEach((to, from, next) => {
  console.log('Global Before each!');
  // You have to execute next to allow the routing process to complete or else it will not continue and will get
  // blocked after the console.log statement has ended.
  
  // You can pass a variety of objects in the next method.
  // For example, we can pass next(false); to abort the function and stay on the current page.
  // We can even issue a redirect here by using callback functions and methods.
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
