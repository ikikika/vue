<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addOne">Add 2</button>
    <change-counter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue'

export default {
  components: {
    BaseContainer,
    ChangeCounter
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      this.$store.commit('increase', { value: 2 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>