import Vue from 'vue'
import App from './App.vue'

// Creating custom directive:
Vue.directive('highlight', {
  // There are five hooks or lifecycle hooks for configuring the directive.
  // bind(el,  binding, vnode): ONCE DIRECTIVE IS ATTACHED.
  //  This is fired as soon as our directive is bound to the element, so as soon as
  //  we get access to the element there. el refers to the elementary directive, binding refers to the way this directive
  //  is set up, that is which arguments we  may pass in or which arguments which may pass in and vnode refers to the
  //  virtaul DOM that we are going to really use. binding and vnode should be treated as read only. 
  // inserted(el, binding, vnode): INSERTED IN PARENT NODE
  //  This occurs as soon as it is inserted in the DOM. So, as soon as this element alters part of the DOM.
  // update(el, binding, vnode, oldVnode): ONCE COMPONENT IS UPDATED (without CHILDREN)
  //  When the children of the component haven't been updated yet. Here, we get an extra argument i.e, old V node. Since,
  //  it got updated, we got the new node in the Virtual DOM and the old node. 
  // componentUpdated(el, binding, vnode, oldVnode): ONCE COMPONENT IS UPDATED (with CHILDREN)
  //  This is called once everything has been updated along with the children. The arguments are same as update hook.
  // unbind(el, binding, vnode): ONCE DIRECTIVE HAS BEEN REMOVED.
  // We are going to use the bind and the update often because bind method is where the triggering anything your
  // directive should trigger when applied to an element. 
  bind(el, binding, vnode){
    // el.style.backgroundColor = "green";
    // el.style.backgroundColor = binding.value;
    var delay =0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }
      else {
        el.style.color = binding.value;
      }
    }, delay)
  }
});
// We can use this custom directive by using v-highlight.
new Vue({
  el: '#app',
  render: h => h(App)
})