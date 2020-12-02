import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  /*
    linkExactActiveClass command assigns the class for the router-links
    This class help in highlighting the selected link.

    by default linkExactActiveClass is assigned as 'a.router-link-exact-active' 
    but you can change it as follows:
    linkExactActiveClass: "vue-school-active-class"
    now just rename the highlighted class name in the desired
  
  
  */
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
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () =>
      import(/* webpackChunkName: "details"*/ "../views/DestinationDetails.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
