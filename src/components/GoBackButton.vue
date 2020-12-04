<template>
  <span class="go-back"
    ><button @click="goBack"><h5>Go Back</h5></button></span
  >
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.go-back {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 0;
  margin: 0.5%;
  outline: none;
}

button:hover {
  background-color: rgb(27, 26, 26);
  color: white;
}
</style>
