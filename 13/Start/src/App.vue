<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- We have used pipe symbol here. This VueJS will take the piece in front of the pipe
                and put it or pass it as a value to the filter that we have created. -->
                <p>{{ text | toUppercase | toLowercase }}</p>
                <hr>
                <!-- When we push a new item to the array, it doesn't reflect in the mixin
                which means that this mixin object is not shared. The mixin is just replicated. -->
                <button @click="fruits.push('Berries')">Add new item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" v-bind:key="index">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from "./fruitMixin.js";
    export default {
        data() {
            return {
                text: 'hello there!'
            }
        },
        filters:{
            // This will only register the filter locally and thus, it can only be used in this template and 
            // not globally. We can register a filter globally with a view filter. 
            // Each filter will have some value in the argument.
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        mixins:[fruitMixin],
        components:{
            appList: List
        }
    }
</script>

<style>

</style>

// A filter is basically a little syntax feature you can use your template to transform some output in your template.
// A filter helps you transform output in the data. It doesn't transform the data itself. It only transforms what the user
// sees.
// VueJS doens't ship with the built in filters and therefore all the folders we need, has to be built by our own.
// A better alternative to filter would be a computed property, in most of the cases. 