<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>{{ title }}</h2>
    <add-item-component v-on:new-item="addItem"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component v-model="title"></change-title-component>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Greetings from "./components/Greetings";
import AddItemComponent from "./components/AddItemComponent";
import ItemsComponent from "./components/ItemsComponent";
import ChangeTitleComponent from "./components/ChangeTitleComponent";

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
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
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
