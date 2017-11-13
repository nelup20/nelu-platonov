<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import appHeader from "./components/Header";

export default {
  name: 'app',
  components: {
    "app-header": appHeader
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
}
</style>

<!-- Going to use components app-header for the Navigation
and app-footer for the contact details and other. router-view will change the Portfolio, about and skills components
-->