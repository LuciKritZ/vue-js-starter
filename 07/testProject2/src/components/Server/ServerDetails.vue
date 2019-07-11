<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>

</template>

<script>
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
// Applying scoped in style the single file template will only apply css to the elements that are present in the file.
// Wherever we use scoped, it adds a unique id to the divs and so in style, so that it can map the divs and the style.
// The same id is used for the div and the style.
// That's because it emulates the behaviour known as shadow DOM. The shadow DOM basically means that in the browsers,
// that in the real DOM, each element in the real DOM, has a different DOM behind the element. So, now we have one
// global DOM and many sub DOMS. It means that one <h1> tag in the global DOM can have different style in another
// <h1> tag in the global DOM.
// This can be seen by inspecting the element and looking at the div id of each element we have applied scope to.