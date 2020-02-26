<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-block mb-4" v-if="blog">
        <div class="card">
          <h1 class="card-title" v-text="blog.title"></h1>
          <img :src="blog.img" class="card-img-top" :alt="blog.title" />
          <div class="card-body">
            <p class="card-text" v-html="blog.det"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  data() {
    return {
      blog: []
    };
  },
  mounted() {
    db.collection("blog")
      .where("id", "==", this.$route.params.id)
      .get()
      .then(res => {
        res.forEach(doc => {
          this.blog = {
            id: doc.data().id,
            title: doc.data().title,
            img: doc.data().img,
            det: doc.data().det
          };
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: none;
}
</style>
