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
  border-bottom: 2px solid black;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
}
</style>
