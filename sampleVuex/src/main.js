import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      setTimeout(function () {
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter.toFixed(2);
    },
    nomalisedCounter(_, getters) {
      if (getters.finalCounter > 100) {
        return 100;
      }
      return getters.finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    // actions can run async code, mutations cannot
    // dun update state in actions. update state in mutations

    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
