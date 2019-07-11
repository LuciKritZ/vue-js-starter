<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name.</button>
        <hr>
        <div class="row">   
            <!-- To pass the properties, we need to add the :property and hence :name.
            If we simply add property, i.e., name, we will get a static string and not a property. -->
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
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
                name: 'Krish'
            };
        },
        methods: {
            changeName(){
                this.name = 'Krishal';
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