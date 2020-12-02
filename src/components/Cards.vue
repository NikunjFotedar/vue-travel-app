<template>
  <div>
    <div class="destination-cards">
      <div
        class="container"
        v-for="destination in destinations"
        :key="destination.name"
        :class="destinations"
        @click="
          $router.push({
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          })
        "
      >
        <figure>
          <!--<router-link :to="destination.name">elements to be hyperlinked</router-link>-->
          <img
            :src="require(`@/assets/${destination.image}`)"
            :alt="destination.name"
          />
        </figure>
        <div class="details">
          <h2 class="destination-title">{{ destination.name }}</h2>
          <p class="destination-description">{{ destination.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  props: {
    destinations: {
      type: Object
    }
  }
};
</script>

<style>
img {
  max-width: 200px;
}
.destination-cards {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: row;
  border-radius: 1em;
  margin-top: 2%;
  transition: box-shadow 300ms;
  padding: 1em;
}
.details {
  flex-direction: columns;
  height: auto;
  width: auto;
  text-align: left;
  justify-content: space-evenly;
}
.container:hover {
  box-shadow: 0.1em 0.2em 2em 0.1em grey;
  cursor: pointer;
}
.destination-title {
  height: fit-content;
  width: fit-content;
}
.destination-description {
  height: fit-content;
  width: fit-content;
}
</style>
