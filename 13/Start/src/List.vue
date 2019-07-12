<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr>
        <input v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" v-bind:key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    export default {
        mixins:[fruitMixin],
        created() {
            console.log('Inside list created hook');
        },
    }
</script>

<style>

</style>

// There is a code duplication in both the App.vue and List.vue.
// Sometimes, there is a code that you may want to use any where in the whole project and so there will be a code
// duplication. To avoid such code duplications, we use Mixins.

// Here, the created() method of mixin will get executed first and then the created() method of the this Vue instance
// will get executed.
// Mixin is not able to destroy anything. It always comes in the last.

// THE GLOBAL MIXIN GETS ADDED TO EVERY SINGLE INSTANCE IN YOUR APP. Hence, we rarely use it.
// You will have to create global mixin if you create third-party plugins in the future and not in your
// production application. 