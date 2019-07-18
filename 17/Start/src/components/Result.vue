<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
import * as types from './store/types.js'
import { mapGetters } from 'vuex';
    export default {
        // props: ['counter']
        computed: {
            // Using mapGetters to get the counter with [] function or dynamic property name.
            ...mapGetters({
                counter: types.DOUBLE_COUNTER
            }),

            // counter(){
            //     // return this.$store.state.counter;
            //     // So here there is a code duplication in both Result and AnotherResult files.
            //     // return this.$store.state.counter * 2;

            //     // Using getters in the components:
            //     return this.$store.getters.doubleCounter;
            // }
        },
    }
</script>