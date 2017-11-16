<template>
  <div id="app">
    <app-header class="header"></app-header>
    <transition name="rotate" mode="out-in">
    <router-view class="router"></router-view>
     </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./components/Header";
import appFooter from "./components/Footer";

export default {
  name: 'app',
  components: {
    "app-header": appHeader,
    "app-footer": appFooter
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
.router{
  height: 100vh;
   background-color: #F2F2F2;
}

.rotate-leave-active{
  animation: rotate-in 0.5s;
}
.rotate-enter-active{
  animation: rotate-out 0.5s;
}
@keyframes rotate-in {
  0%{
    transform: rotateY(0deg)
  }
  100%{
    transform: rotateY(90deg)
  }
}
@keyframes rotate-out {
  100%{
    transform: rotateY(0deg)
  }
  0%{
    transform: rotateY(90deg)
  }
}
</style>

<!-- Going to use components app-header for the Navigation
and app-footer for the contact details and other. router-view will change the Portfolio, about and skills components
-->