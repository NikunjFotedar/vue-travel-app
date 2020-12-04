<template>
  <div>
    <router-link to="/"><h3>Go Back</h3></router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-image: url("~@/assets/errorPage.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h3 {
  font-family: sans-serif;
  color: rgb(17, 17, 17);
  text-decoration: none;
}
</style>
