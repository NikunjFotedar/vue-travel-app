<template>
  <div id="app">
    <TheNavigation />
  </div>
  <router-view :key="$route.path" />
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #2c3e50;
}
</style>
