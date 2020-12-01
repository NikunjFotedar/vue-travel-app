<template>
  <div>
    <div>
      <h2>Profile Cards</h2>
      <p v-if="message.length" style="white-space: pre-line;">
        this component has received a new string: {{ message }}
      </p>
    </div>
    <div>
      <div v-for="profile in profiles" :Key="profile.id" class="cards">
        <h3>{{ profile.name }}</h3>
        <ul>
          <li><b>Age: </b>{{ profile.age }}</li>
          <li><b>Gender: </b>{{ profile.gender }}</li>
          <li><b>Role: </b>{{ profile.role }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  props: {
    message: {
      type: String
    },
    profiles: {
      type: Object
    }
  },

  data() {
    return {};
  }
};
</script>

<style>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.cards {
  margin-top: 2%;
  border-radius: 1em;
  transition: box-shadow 300ms;
  width: 40em;
}
ul {
  list-style-type: none;
  text-align: left;
}

.cards:hover {
  box-shadow: 0.1em 0.2em 2em 0.1em grey;
  cursor: pointer;
}
</style>
