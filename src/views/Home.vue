<template>
  <div class="home">
    <h1>All Destinations</h1>
    <cards :destinations="destinations"></cards>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
import Cards from "../components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards
  },
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}
</style>
