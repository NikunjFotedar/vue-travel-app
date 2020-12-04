import { createRouter, createWebHistory } from "vue-router";
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
    component: Home,
    props: true
  },
  {
    path: "/about",
    name: "About",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "details"*/ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experience"*/ "../views/ExperienceDetails.vue"
          )
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/*webpackChunkName: "NotFound"*/ "../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
