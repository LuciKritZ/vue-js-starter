<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <!-- Any compilation or logic gets builds here. Only the CSS and rendering tasks can be altered there. -->
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <!-- The other way to do it is via removing the other slot name. -->
                   <!-- All the slots where the name is not given are by default considered in a default slot. -->
                   <!-- <p slot="content">A wonderful quote!</p> -->
                   <p>A wonderful quote!</p>
                   <!-- For example if, we define a tag with the slot subtitle, the default tag will get replaced
                   by the content provided in this tag. -->
                   <!-- <p slot="subtitle">A wonderful quote!</p> -->
                   <!-- If we want to render two different elements in a slot at two different locations, 
                   we can do that by using the slot property in the element or the tag. -->
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
        data: function(){
            return {
                quoteTitle: 'The Quote'
            }
        },
        components: {
            appQuote: Quote 
        }
    }
</script>

<style>
</style>
// The scope of compilation and rendering is different. The scope of compilation is the child class and
// the scope of rendering is parent class.