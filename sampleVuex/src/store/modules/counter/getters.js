export default {
  finalCounter(state) {
    return state.counter.toFixed(2);
  },
  nomalisedCounter(_, getters) {
    if (getters.finalCounter > 100) {
      return 100;
    }
    return getters.finalCounter;
  },
};
