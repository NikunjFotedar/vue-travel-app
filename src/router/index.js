import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Brazil",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
  },
  {
    path: "/Hawaii",
    name: "Hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawai.vue")
  },
  {
    path: "/Panama",
    name: "Panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/Panama.vue")
  },
  {
    path: "/Jamaica",
    name: "Jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
