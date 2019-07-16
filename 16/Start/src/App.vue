<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <!-- So noe we can redirect the routes without realoading the page. -->

                <!-- We can not only name the routes, but we can also name the router-views. -->

                <!-- <app-header></app-header> -->

                <!-- <router-view name="header-top"></router-view> -->
                <app-header></app-header>   
                <!-- Animating the transitions -->
                <transition name="slide-fade">
                    <router-view></router-view>        
                </transition>
                <!-- <router-view name="header-bottom"></router-view> -->
                <!-- This includes # in the url and after appending /user, we can see the user file getting loaded 
                without getting reloaded. -->
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
    export default {
        components:{
            appHeader: Header
        }
    }
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

// Our aim is to create a single page application that is, from the user's point of view, it may look like multiple pages
// but in reality, there is just a single index.html file that is being run in the frontend.
// For achieving this, we use routers that gives routes/urls and the dynamic components gets loaded according to the
// routes configured.

// Why # is added automatically in the URL?
// It was added because it's a default setup, the Vue router uses. It's a pattern you see a lot and single page
// applications due to specific reason. We don't want the route to get to the server and we want to load the application
// using a single page. We want to handle it in our local page. 
// Vue router helps us exactly to do that. The part before # goes to the server and after the hash is handled by
// the application. 

// To not show the URL with the #, the server needs to be configured. The server needs to return the index HTML file 
// on every request, even the 404 not found page. 

// LAZY LOADING
// There's no point of loading all the data in the starting of any application. For that, we use
// lazy loading. It means that we only load parts of the application when we need it.