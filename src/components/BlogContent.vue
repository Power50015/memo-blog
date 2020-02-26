<template>
  <router-link :to="`/blog/${data.id}`" class=" col-12 d-block mb-4">
    <div class="card">
      
      <img
        :src="data.img"
        class="card-img-top"
        :alt="data.title"
      />
      <div class="card-body">
        <h2 class="card-title" v-text="data.title"></h2>
        <p
          class="card-text" v-html="data.summary"
        ></p>
        <a href="#" class="btn btn-light">Read More</a>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogContent",
  props: {
    data: {
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}
a h2:hover {
  text-decoration: underline;
}
</style>
