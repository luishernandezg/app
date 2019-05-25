<template>
  <div id="app">
    <h2>
      <span>{{ 'Pomodoro' | uppercase | addspace }}</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component v-bind:isworking="isworking"></state-title-component>
    <countdown-component></countdown-component>
    <transition name="fade">
      <kittens-component v-if="kittens"></kittens-component>
    </transition>
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

window.data = {
  kittens: true,
  isworking: true
};

export default {
  name: 'app',
  data () {
    return window.data
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
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
