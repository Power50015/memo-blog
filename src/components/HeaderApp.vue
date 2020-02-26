<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/logo.png" />
        </router-link>
        <div class="my-0">This Is Vue.js Test Project</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderApp"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand img {
  width: 100px;
}
</style>
