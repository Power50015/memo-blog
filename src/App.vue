<template>
  <div id="app">
    <header-app />
    <router-view></router-view>
    <footer-app />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}
</style>
