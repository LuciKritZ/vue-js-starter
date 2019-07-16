<template>
    <div>
        <h3>Edit the User</h3>
        <!-- Extracting the information of the query parameters. -->
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px; background: linear-gradient(#141E30, #243B55); ">

        </div>

        <p id="data">Some Dummy data</p>

        <!-- So now we can extract and use the query parameters along with the normal parameters. -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false    
        }
    },
    beforeRouteLeave (to, from, next) {
        // Here, we have access to the confirmed as the component has already been loaded.
        // Make sure to check all the conditions while using beforeRouteLeave
        if(this.confirmed){
            next();
        }
        else{
            // Confirm dialog box to make sure that the user don't navigate away while not saving the
            // sensitive data.
            if(confirm('Are you sure, you want to leave?')){
                next();
            }
            else{
                next(false);
            }
        }
    }
}
</script>
