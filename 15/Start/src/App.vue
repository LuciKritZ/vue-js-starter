<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-grou">
                    <li class="list-group-item" v-for="(u, index) in users" v-bind:key="index">
                        {{ u.username }} - {{ u.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user:{
                    username: '',
                    email: ''
                },
                users: [],
                resource: {}
            }
        },
        created() {
            // So now we can create all the resources in the customActions and we can use it as many times as we want
            // in a centralized place. For example, we can store the resources here in created or we can simply
            // store it in a more centralized place that is in the main.js
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'}
            }
            this.resource = this.$resource('data.json', {}, customActions);
        },
        methods: {
            submit(){
                // $http was added by VueResource.
                // this.$http.post('', this.user)
                //     .then(response => {
                //         console.log(response)
                //     }, error => {
                //         console.log(error)
                //     });

                // Using resources to save some lines of code and memory.
                // this.resource.save({}, this.user);

                // using customActions:
                this.resource.saveAlt(this.user);
            },
            fetchData(){
                this.$http.get('')
                    .then(response => {
                        // .json() method basically extracts all your responses and converts them 
                        // into the javascript which you may use.
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for(let key in data){
                            resultArray.push(data[key])
                        }
                        this.users = resultArray
                    });
            }
        },
    }
</script>

<style>
</style>
