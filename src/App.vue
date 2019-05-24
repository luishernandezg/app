<template>
  <div id="app">
    <h2>
      <span>Pomodoro</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component></state-title-component>
    <countdown-component></countdown-component>
    <kittens-component></kittens-component>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Greetings from "./components/Greetings";
/*import AddItemComponent from "./components/AddItemComponent";
import ItemsComponent from "./components/ItemsComponent";
import ChangeTitleComponent from "./components/ChangeTitleComponent";*/

import ControlsComponent from "./components/ControlsComponent";
import CountdownComponent from "./components/CountdownComponent";
import StateTitleComponent from "./components/StateTitleComponent";
import KittensComponent from "./components/KittensComponent";

export default {
  name: 'app',
  data: function () {
    return {
      title: 'Lista',
      items: [
              { text: 'Bananas', checked: true },
              { text: 'Apples', checked: false }
      ]
    }
  },
  methods: {
    addItem (text) {
      this.items.push({
        text: text,
        checked: false
      })
    }
  },
  components: {
    // Greetings,
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
