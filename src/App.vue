<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-bind:class= "index===1 ? 'active' :''" v-for="(list, index) in shoppinglists" role="presentation">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
    </ul>
    <div class="tab-content">
      <div v-bind:class= "index===1 ? 'active' : ''"
           v-for="(list,index) in shoppinglists" class="tab-pane"
           role="tabpanel" v-bind:id="list.id">
        <shopping-list-component :id="list.id"
          v-bind:title="list.title" v-bind:items="list.items">
        </shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>

import ShoppingListComponent from "./components/ShoppingListComponent";
import ShoppingListTitleComponent from "./components/ShoppingListTitleComponent.";
import store from './vuex/store'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  store: store,
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
      shoppinglists: 'getLists'
  }),
  methods: {
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
