import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./view/Home.vue";
import Single from "./view/Single.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", component: Home },
    { path: "/blog/:id", component: Single }
  ]
});
