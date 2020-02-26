<template>
  <div class="container" v-if="blogs">
    <div class="row">
      <blog-content v-for="artic in blogs" :key="artic.id" :data="artic" />
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";
import BlogContent from "../components/BlogContent.vue";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  components: {
    BlogContent
  },
  mounted() {
    this.getContent();
  },
  methods: {
    summary(txt){
      return txt.slice(0,100) + "  .....";
    },
    getContent() {
      db.collection("blog")
        .get()
        .then(res => {
          res.forEach(doc => {
            const data = {
              'id': doc.data().id,
              'title': doc.data().title,
              'img': doc.data().img,
              'summary': this.summary(doc.data().det)
            };
            this.blogs.push(data);
          });
        });
        
    },
  }
};
</script>

<style>
</style>