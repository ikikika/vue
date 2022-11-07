<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <favourite-value />
    <button @click="addOne">Add 2</button>
    <change-counter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavouriteValue
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch('increase', { value: 2 });
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