<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
// importing mapMutations from vuex
// import {mapMutations} from 'vuex';

// Vuex also has mapActions and we can import them through:
import { mapActions } from 'vuex';
    export default {
        methods: {
            // Using mapActions to map the actions, similar to the way we used the mapMutations
            ...mapActions([
                'increment',
                'decrement'
            ]),
            // What does mapActions do behind the scenes?
            // increment(by) {
            //     this.$store.dispatch('increment',by)
            // }


            // Using mapMutations same as we used mapGetters in this component with the SPREAD operator.
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ]),

            // increment() {
            //     // this.$emit('updated', 1);
            //     // this.$store.state.counter++;
            //     // Using the increment mutation in the increment function here:
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     // this.$store.state.counter--;
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>