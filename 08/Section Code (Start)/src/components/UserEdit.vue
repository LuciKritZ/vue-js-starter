<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
    export default{
        props:['userAge'],
        methods:{
            editAge(){
                this.userAge = 30;
                // Aam zindagi: Calling a custom event and traversing the whole parent sibling chain.
                // this.$emit('ageWasEdited', this.userAge);
                // Mentos zindagi: Calling a custom event without traversing and using an eventBus.
                // eventBus.$emit('ageWasEdited', this.userAge);
                // Krishal zindagi: Write the function in the event bus and just call the function here.
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
