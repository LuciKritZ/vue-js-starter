<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                counter: 0
            };
        },
        destroyed(){
            console.log('Destroyed')
        },
        // The two life cycle hooks that can be used when using dynamic components are 
        // deactivated and activated.
        deactivated(){
            console.log('Deactivated')
        },
        activated(){
            console.log('Activated')
        }
    }
</script>
// The counter starts again at the zero when we navigate to some other page and come back.
// Which means that the component gets actually destroyed and recreated. We can override this behaviour.
// This can be achieved by using keep-alive tag. The component will not get destroyed.
// Can we use other life cycles if we can't use destroy? And what if we want to react to navigating away, so that
// another component gets loaded.
// We have two life cycle hooks to be controlled if the dynamic component is currently visited. activated and deactivated.
// So, these are the two life cycle hooks that we can use.