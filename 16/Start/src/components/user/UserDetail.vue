<template>
    <div>
        <h3>Some User Details</h3>
        <!-- Getting the ID of the user using the params property of the $route instance. -->
        <p>User ID: {{ $route.params.id }}</p>

        <!-- Making an edit button and using the application in a more dynamic manner. -->
        <!-- <router-link
            tag="button"
            v-bind:to="'/user/'+ $route.params.id + '/edit'"
            class="btn btn-primary"
        > -->

        <!-- We can give names to our routes and this is the way we will use the name property and save some time. -->
        <!-- We can give the id using the params and id will be equal to $route.params.id in our case. -->

        <!-- To use the id dynamically, we will have to use the bind function as for passing the data,
        we use bind and without using bind, we can not pass the params to the URL. -->

        <!-- So, now we will learn about query parameters. Example of a query parameter:
        https://example.com?a=100&b=50
        To use such query paramters, we can directly pass the query to the to method. -->
        <!-- Query parameter is always an object which consists of a key value pair. -->

        <!-- When we want to redirect to the particular section/ fragment of the page, we can do that by id.
        We can do that by passing the paramater in 'to' object. -->
        <router-link
            tag="button"
            v-bind:to="link"
            class="btn btn-primary"
        >
            Edit user here
        </router-link>
        <!-- After doing this, #data is present in the URL, but it doesn't scroll down to the data.
        We notice that when we input the same URL in the browser, it scrolls down to data, so for
        getting this behaviour, we will have to add a method in the main.js -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit',
                params: {id: this.$route.params.id },
                query: {locale: 'en', q:100},
                hash: '#data'
            }
        }
    },
    beforeRouteEnter (to, from, next) {
        // NOTE: We can not access the link or any data that's present in the component as the component
        // will not have been loaded as this is beforeRouteEnter method. If we do want to access this in
        // any case, we can do this by:
        // next(vm => {
        //     console.log(vm.link);
        // });


        // Unless next is called, you can not access your vue instance and you can not access your data.
        if(true){
            // Check for authentication here and then allow the route to continue it's journey.
            next();
        }
        else{
            // Here if the user is not authenticated, the next function will abort and the route will not be able
            // to continue it's journey.
            next(false);
        }

        // We can check in three different places and in all the places, we don't have access to the component you're
        // passing it to. You only have access to routes you're coming from and the route you're going to.

        // And then we have a callback function which you need to execute to either abort or redirect or let
        // the request continue to it's journey.
    }
}
</script>
