<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <!-- This is where the change will occur. So, now we are passing the data from the parent to the child. -->
        <p>User name: {{ myName }}</p>
    </div>
</template>

<script>
    // For transferring data from parent component to child component, we use props.
    // It's a short form of properties and it basically means properties set from outside, that is from parent.
    export default{
        props: [ 'myName' ]
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
