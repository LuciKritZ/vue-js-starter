<template>
  <div id="app">
    <div id="app">
      <treeselect
        v-model="value"
        :multiple="true"
        :options="options"
        valueFormat = "object"
      >
      </treeselect>
    </div>
    <p>{{value}}</p>
    <hr />
    <p>{{value1}}</p>
  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define default value
      value: null,
      value1: [],
      // define options
      options: [
        {
          id: "m",
          label: "McDonalds",
          children: [
            {
              id: "m-fries",
              label: "French Fries"
            },
            {
              id: "m-cheeseburger",
              label: "Cheeseburger"
            },
            {
              id: "m-white-cheedar-burger",
              label: "White Cheddar Burger"
            },
            {
              id: "m-southwest-buttermilk-crispy-chicken-salad",
              label: "Southwest Buttermilk Crispy Chicken Salad"
            },
            {
              id: "m-cola",
              label: "Coca-Cola®"
            },
            {
              id: "m-chocolate-shake",
              label: "Chocolate Shake"
            }
          ]
        },
        {
          id: "kfc",
          label: "KFC",
          children: [
            {
              id: "kfc-fries",
              label: "French Fries"
            },
            {
              id: "kfc-chicken-litties-sandwiches",
              label: "Chicken Litties Sandwiches"
            },
            {
              id: "kfc-grilled-chicken",
              label: "Grilled Chicken"
            },
            {
              id: "kfc-cola",
              label: "Pepsi® Cola"
            }
          ]
        },
        {
          id: "bk",
          label: "Burger King",
          children: [
            { 
              id: "bk-chicken-fries",
              label: "Chicken Fries"
            },
            {
              id: "bk-chicken-nuggets",
              label: "Chicken Nuggets"
            },
            {
              id: "bk-garden-side-salad",
              label: "Garden Side Salad"
            },
            {
              id: "bk-cheeseburger",
              label: "Cheeseburger"
            },
            {
              id: "bk-bacon-king-jr-sandwich",
              label: "BACON KING™ Jr. Sandwich"
            },
            {
              id: "bk-cola",
              label: "Coca-Cola®"
            },
            {
              id: "bk-oreo-chocolate-shake",
              label: "OREO® Chocolate Shake"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>