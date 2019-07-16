<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- Displaying the dynamic ID that we redirect to based on the ID in the URL. -->
        <!-- As we have seen, this ID doesn't get changed as the component doesn't get recreated, if we need to 
        update the ID, we need to update the pieces on our page. We can use watch for this. -->
        <!-- <p>Loaded ID: {{ id }}</p> -->
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
        <hr>
        <!-- Now, if we use this router-view, when we will open the /user page, we will see the page of the UserStart -->
        <!-- If we open by passing any id, we will see UserDetail page. -->
        <!-- Similarly, if we open the /user/id/edit page, we will see the UserEdit page./ -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         // Dynamic ID
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     // It's the same route, but there is something to keep in mind. We do have our new parent's route stored in
        //     // to route. 
        //     '$route'(to, from){
        //         // This will be the ID of the new route and it will be dynamic.
        //         // to is just the route. So, we don't have to use $route.
        //         this.id= to.params.id;
        //     }
        // },
        methods: {
            navigateToHome(){
                // To navigate to some other route using router in the JS, 
                // we can simple use $router method. $ is used to show that the this method is not coming from
                // some local method and this can be accessed globally. 
                // We will just push this link to the stack of the navigation options, so that it doesn't affect
                // when we go back or forward as we are just pushing this in the stack.
                // So, this is how we manage navigation in the JS in our scripts.

                // Passing the name in the router method will be more efficient as we don't have to write the full path
                // of the links now.
                this.$router.push({name: 'index'});
            }
        },
    }
</script>
