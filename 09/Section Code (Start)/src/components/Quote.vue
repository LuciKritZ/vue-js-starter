<template>
    <div>
        <div>
            <!-- The slot that has the name title will get rendered here. -->
            <slot name="title"></slot>
            <!-- When we want to display some default content.
            Whenever we do insert content, the default content here in the middle gets replaced.
            But, it's being displayed in our case where we don't have data being passed out from outside. -->
            <span style="color: #ccc"><slot name="subtitle">The subtitle</slot></span>
        </div>
        <hr>
        <div>
            <!-- The slot that has the name content will get rendered here. -->
            <slot></slot>
        </div>
        <!-- The slot element allows us to render the content from the parent class to the child class. -->
    </div>
</template>

<script>
    export default{
        props: ['quote']
    }
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center
    }
    /* The first key takeaway:
        h2 is used in App.vue and whatever CSS we apply, gets applied to the data that we get from the parent file.
        The style of only child applies. If we apply the CSS in the App.vue file, it won't take any CSS.
    */
    h2 {
       color: rebeccapurple; 
    }
</style>