<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <!-- The only problem here is that we are using the traditional two way binding here and what
                if we wanted to use the normal and the shorter way.-->
                <!-- <input type="text" :value="value" @input="updateValue"> -->

                <!-- The shorter form: -->
                <input type="text" v-model="value">
                <!-- Be a little careful while using this property as it may cause unnecessary issues if
                used in a wrong way. -->

                <!-- The state will not get changed because our computed value here is only a getter, so we 
                won't be able to set it using the two-way binding. There's a way to fix it. We can do that by
                calling the method from the store using dispatch. -->
                <p>{{value}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        computed: {
            value: {
                get(){
                    // You can set up a getter and a setter property in the computed property.
                    return this.$store.getters.value;   
                    // Get method is obviously for getting the value
                },
                set(value){
                    // And here we can set the property using the dispatch method in the computed property.
                    this.$store.dispatch('updateValue', value);                }
            }
        },
        methods: {
            // So now the state will get updated every time we change the value using getter.
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value);
            }    
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult
        }
    }
</script>

// For passing the data from one child to the other:
// For small scale applications, we can just pass callback as props to the children and then we can use callback
// to pass the data to the parent and then we can then pass the data as props to the other children.
// However, this gets really complex when there are more layers of components to our application. Another alternative
// is to use the event bus. This means we still can't access it directly but we use a central component, a central
// Vue instance which we use as a bus and then we use to call $emit on this bus and then on the target component,
// we listen via $on changes in this bus.
// Issues: One bus with bigger application will get pretty crowded in bigger applications with a lot of different $emit s
// and so on. So, there is a lot of code in this instance, which is arguably not the best approach to this problem. Also,
// the changes we make are hard to track. It's difficult to see where we made changes in which place at what time as there
// is a central bus in the whole application. For large applications, this might not be the best tool to use.
// So, to better manage the state, we use the VueX. It stores the data in a centralized place, but then also some
// specific places where we define the ways to change and get the data and we have a clear separation of concerns here
// and we can therefore easily track where we have made the changes.

// The VueX has an idea of using a centralized store where our state is stored. This doesn't mean that the component can't
// have their own state. Everything you use in different parts of the application should go in the store.


// When we more complex calculations when fetching our state and possibly do have this in multiple parts of the
// applications, instead of directly accessing our state in the component where we want to access the state,
// we can create a GETTER. A getter would then get the state from the store and perform any calculations are to be
// performed, but then we access getter from our different components.

// We can face issues in getters if there are multiple components manipulating our state. We have a better option to getters.
// The concept is same but it is called mutations as it mutates the store or it changes the state.

// So now we make sure that changing the state code in one place will automatically change the code in all other places
// as we have used the mapMutations method everywhere.

// An action is used whenever we want to continue the mutation along with the asynchronous tasks and track the mutations
// as well. It's an extra function where we may run async tasks and we dispatch the action from the component where we 
// then commit the mutation and we only commit the mutation after the async task is done. This has one major benefit
// that we may trigger action in our component we dispatch it there and then we reach out to the server.
// It takes a couple of time: milliseconds/seconds and no change is committed. 
// Only once this long time taking async calculation or task is finished, do we then commit the mutation, so only then
// we change the state in our store.