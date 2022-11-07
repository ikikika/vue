import counterMutations from './mutations';
import counterGetters from './getters';
import counterActions from './actions';

export default {
  namespaced: true, // detach this module from the rest of the store.
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
