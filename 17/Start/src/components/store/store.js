import Vue from 'vue';
// Importing Vuex after npm install --save vuex
import Vuex from 'vuex';

// Importing other vuex files from the file system.
import counter from './modules/counter.js';

// Importing actions from the actions file by giving the path.
import * as actions from './actions.js';

// Importing mutations from the mutations file by giving the path.
import * as mutations from './mutations.js';

// Importing getters from the getters file by giving the path.
import * as getters from './getters.js';

// Using Vuex
Vue.use(Vuex);

// Trimming away and distributing the files and using them separately.

export const store = new Vuex.Store({
    // We want to store the state of the application here.
    state: {
        value: 0
    },
    getters,
    // Mutations always have to be synchronous which can/can not be a big issue depending upon the nature of the app.
    // So we must not run in any asynchronous tasks in a mutation.
    mutations,
    actions,
    // We can use modules to merge all the vuex files in our centralized state.
    modules: {
        counter
    }
});