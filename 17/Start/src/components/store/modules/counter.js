import * as types from '../types.js';

const state = {
    counter: 0,
}

const getters = {
    // [] can be used for giving the dynamic property name. It's an ES6 function. 
    // We can tell the javascript to assign this name on the runtime.
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
}

const mutations = {
    increment: (state, payload) => {
        // So here, if we want to use Timer or we are sending any request to the server, it won't work as it doesn't
        // perform asynchronous tasks.
        // So we want to have that reliabiltiy that if we run this mutation, the state changes accordingly, but 
        // we need it to perform the async tasks sometimes. 
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
}

const actions = {
    increment: (context, payload) => {
        // context gives us the access to the commit method through which we can access the mutations and getters.
        // commit has a lot of properties and methods of our store. We have access to all the features of our store
        // that we technically need and not all in general.
        context.commit('increment', payload);
        // We can use another syntax and only for the commit function, an ES6 feature of destructuring by passing
        // this an argument.

    },
    decrement: (context, payload) => {
        // Payload is the second argument of our action. It can be named anything but naming it payload is a 
        // default convention.s
        // context.commit('decrement');
         
        context.commit('decrement', payload);

    },
    asyncIncrement: (context, payload) => {
        setTimeout(() => {
            context.commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: (context, payload) => {
        setTimeout(() => {
            context.commit('decrement', payload.by);
        }, payload.duration);
    },
    // So this is how we can pass a payload with the actions to the mutations and we can either pass a single
    // argument or we can pass an object with multiple properties.
    // ANOTHER APPROACH
    // increment: ({commit}) => {
        // context gives us the access to the commit method through which we can access the mutations and getters.
        // commit has a lot of properties and methods of our store. We have access to all the features of our store
        // that we technically need and not all in general.
        // context.commit('increment');
        // We can use another syntax and only for the commit function, an ES6 feature of destructuring by passing
        // this an argument.

    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}