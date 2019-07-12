export const fruitMixin = {
    data() {
        return {
            text: 'hello there!',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            // This is a better option to filter.
            // Filter are a nice solution but often times properties are the better solution.
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created(){
        console.log("Created in the mixin.");
    }
}

// Here, we have created a mixin, that creates a code snippet or reusable code which can be used anywhere across our application.
// The mixin doesn't destroy the Vue instance, but it tries to add new things added by the mixin into the existing instance.
// If the life cycle hooks gets executed at the same time, in the mixin and the component, then the order is mixin first,
// and then the component.

// Here the created method will run twice as we are using the mixin in two different files.

// So, each component which gets this as it makes in gets a fresh copy of this object and we are not sharing one.
// It's safe to use mixin and do not affect the data in other components. If you want it to affect to the places
// where you have used mixins in the application, consider using the event bus. 
// If you use a mixin array, VueJS will simply create a copy for you so that you can safely edit the data and don't
// influence the other components.