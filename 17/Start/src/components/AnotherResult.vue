<template>
    <div>
        <!-- <p>Counter is: {{ counter }}</p> -->
        <!-- <p>Number of clicks: {{ clicks }}</p> -->

        <!-- Using the name of the getters specified directly. -->
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
// For using getters according to its name automatically and not using other variables, 
// we can use one of the helper functions of the vuex, which is known as mapGetters.
import { mapGetters } from 'vuex';
import * as types from './store/types.js';
    export default {
        // props: ['counter']
        // computed: {
        //     // So now to save the code we can specify which getter methods are we going to execute
        //     // and we can directly use them in the code.

        //     counter(){
        //         // return this.$store.state.counter;
        //         // So here there is a code duplication in both Result and AnotherResult files.
        //         // return this.$store.state.counter * 2;

        //         // Using getters in the components:
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks(){
        //         return this.$store.getters.stringCounter;
        //     }
        // },
        computed: {
            // So we will have to use the spread operator that is the three dots.
            // The spread operator basically allow us to tell JS to pull out all the properties and methods
            // in the object you have here and create a key value pair for all of them.
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
                // Now, we can use them directly in the code in the component.

                // NOTE: We can use the mapGetters function as an object as well. We can use this to map getters to 
                // different names.
                // mapGetters({
                    // propertyName: 'doubleCounter',
                // })

                // DRAWBACK: We can not create other state computed properties if we want to use something totally 
                // unrelated to the store.
                // However, we can do this by making mapGetters a different object.
            }),
            // write a new computed property.
            // However, this will still give us an error that ... are not expected. To overcome this, we can use
            // babel-preset-stage-2.
            // This will add support for the rest and the spread operator that we are using currently.
            // We will have to make a new entry in the babelrc file.
        }
    }
</script>