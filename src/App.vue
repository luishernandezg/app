<template>
  <div id="app">
      <show-greetings-component :msg='msg'></show-greetings-component>
      <change-greetings-component :msg='msg'></change-greetings-component>
  </div>
</template>

<script>

    import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
    import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
    import store from './vuex/store'

export default {
  name: 'app',
  components: {
      ShowGreetingsComponent,
      ChangeGreetingsComponent
  },
    store
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
