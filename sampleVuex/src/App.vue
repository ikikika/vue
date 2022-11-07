<template>
  <base-container title="Auth">
    <user-auth />
  </base-container>
  <base-container title="Vuex" v-if="isAuth">
    <h3>{{ finalCounter }}</h3>
    <favourite-value />
    <button @click="addOne">Add 2</button>
    <change-counter />
  </base-container>

</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter']),
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
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