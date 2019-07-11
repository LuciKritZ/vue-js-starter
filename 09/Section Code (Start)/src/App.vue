<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <!-- <app-quote> -->
                   <!-- Any compilation or logic gets builds here. Only the CSS and rendering tasks can be altered there. -->
                   <!-- <h2 slot="title">{{ quoteTitle }}</h2> -->
                   <!-- The other way to do it is via removing the other slot name. -->
                   <!-- All the slots where the name is not given are by default considered in a default slot. -->
                   <!-- <p slot="content">A wonderful quote!</p> -->
                   <!-- <p>A wonderful quote!</p> -->
                   <!-- For example if, we define a tag with the slot subtitle, the default tag will get replaced
                   by the content provided in this tag. -->
                   <!-- <p slot="subtitle">A wonderful quote!</p> -->
                   <!-- If we want to render two different elements in a slot at two different locations, 
                   we can do that by using the slot property in the element or the tag. -->
                <!-- </app-quote> -->
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent  }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!-- keep-alive can be used to make sure that the component doesn't get destroyed. -->
                <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A wonderful Quote </p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    
    export default {
        data: function(){
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
// The scope of compilation and rendering is different. The scope of compilation is the child class and
// the scope of rendering is parent class.


// What are slots?
// Slots help you to distribute your content in other components. It's especially useful where you want to build
// reusable widgets like a slide show where you have a frame for each side and you want to switch between the slides
// each slide will have it's individual HTMl code layout.

// Dynamic Components:
// -> Dynamic components can be used to dynamically display the components according to the user actions or animations.
// -> So, this is how we can use the dynamic components to dynamically replace a part in our template with different 
// components triggered by button clicks or stored property which is bound with the ES keywords here.