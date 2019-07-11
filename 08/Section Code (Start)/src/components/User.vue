<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name.</button>
        <p>My name is {{ name }}</p>
        <p>My age is {{ age }}</p>
        <hr>
        <div class="row">   
            <!-- To pass the properties, we need to add the :property and hence :name.
            If we simply add property, i.e., name, we will get a static string and not a property. -->
            <div class="col-xs-12 col-sm-6">
                <!-- If we don't set required, it's okay to not pass the prop like this. -->
                <!-- So this can help in prompts to make sure that the component
                may only be used if this property is passed. We can even set the default value. -->
                <!-- It can be used when we have given a default value. -->
                <!-- <app-user-detail></app-user-detail> -->
                <!-- When we use an event listener, we can use the method of child component in the parent component. -->
                <app-user-detail
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                >
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name: 'Krish',
                age: 27
            };
        },
        methods: {
            changeName(){
                this.name = 'Krishal';
            },
            resetName(){
                this.name = 'Krish'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
// Here we can use myName instead of name because of the single file template.
// However, for another template, this can not be applied because of the DOM implications and restrictions
// of having case insensitive attributes and elements, applies. 
// So, a case sensitive attributes will only work if you are using the single file template.

// Component Communication:
// For example there are three children of a single child. There will be a unidirectional Data Flow from Top to Bottom.
// The two components of a same parent can not communicate directly. As an option, there is going to be a route
// that a child needs to follow for passing the information to another one.

// Route:
// 1. Parent ----- gives us some method we can execute (pass callback as prop) -----> Child one.
// 2. Child one ----- When we execute this method provided by the parent, this will run in parent
//      and alternatively we can use custom event to which the parent listens (use callback as prop) -----> Parent
// 3. Parent ----- can pass the updated data to the other child -----> Child 3
// THIS IS CALLED UNIDIRECTIONAL DATA FLOW FROM TOP TO BOTTOM.
