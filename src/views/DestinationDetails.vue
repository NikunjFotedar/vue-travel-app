<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      //always use a data key to use this.$route.params.id due to es6 stylus.direct this.$route.id wont work in template
      destinationID: this.$route.params.id
    };
  },
  computed: {
    destination() {
      console.log(this.destinationID);
      console.log(
        "destination: " +
          store.destinations.find(
            destination => destination.id == this.destinationID
          )
      );
      return store.destinations.find(
        destination => destination.id == this.destinationID
      );
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
