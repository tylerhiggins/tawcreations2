import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {title: 'TAWCreations - About'}
  },
  {
    path: "/TOS",
    name: "tos",
    component: () =>
        import("../views/TOS.vue"),
    meta: {title: 'TAWCreations - TOS'}
  },
  {
    path: "prices",
    name: "prices",
    component:() =>
        import("../views/Prices.vue"),
    meta: {title: 'TAWCreations - Prices'}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
