<template>
    <div>
        <!-- Here you can't pass two arguments to an action, so what we do is, we send a single argument
        as an object and so we can use as many properties as we want. -->
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),
            // increment() {
            //     // this.$emit('updated', 1);
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     this.$store.state.counter--;
            // }
        }
    }
</script>