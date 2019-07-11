<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <!-- This is where the change will occur. So, now we are passing the data from the parent to the child. -->
        <p>User name: {{ switchName() }}</p>
        <button @click="resetName()">Reset the name</button>
    </div>
</template>

<script>
    // For transferring data from parent component to child component, we use props.
    // It's a short form of properties and it basically means properties set from outside, that is from parent.
    export default{
        props: {
            // Declaring the datatype of the prop is possible here.
            // If we pass an integer, we get an error of validation that the type check failed which is good for developers.
            // This is a good practice to find the error and declare the type pf the prop.

            // myName: String

            // We can also set it as a object where we define it's type and we can set it's present everytime by
            // setting require: true, that means that this is a property which always is a string
            // and it should always be available.
            myName: {
                type: String,
                // required: true
                default: 'Krystal'
                // We can set the default in case it's not compulsary to pass the property or if the required is set to false.

                // Now, if we set the type to be an object, then default should always be a function.
                // type: Object, Array,
                // default: function(){
                //     name: 'Max'
                // }
            }
        },
        methods: {
            // We can use the props in methods too like a normal variable or a data object.
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Krishal Shah';
                // When changing in the child component, it will not reflect in the parent component
                // as we need to fire a custom event. And to fire a custom event, we can use $emit();
                this.$emit('nameWasReset', this.myName);
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>