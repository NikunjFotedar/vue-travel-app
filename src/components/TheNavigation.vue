<template>
  <div id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="links"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          {{ destination.name }}</router-link
        >
      </li>
      <li class="links">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
#nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
  transition: background-color 800ms;
}
#nav:hover a {
  color: white;
}
#nav:hover .logo {
  color: white;
}
#nav:hover {
  border-bottom: 3px solid black;
  background-color: coral;
  transition: background-color 800ms;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 400ms;
}

#nav a.router-link-exact-active {
  color: #42b983;
  transition: color 400ms;
}
#nav:hover a.router-link-exact-active {
  color: rgb(24, 24, 24);
}
.nav-links {
  display: flex;
  align-items: center;
}
.links {
  padding-right: 20px;
  list-style: none;
  text-align: center;
}
.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: royalblue;
  font-weight: bold;
  transition: color 400ms;
}
</style>
