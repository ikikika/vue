export default {
  increment(context) {
    context.commit('increment');
  },
  increase(context, payload) {
    setTimeout(function () {
      context.commit('increase', payload);
    }, 2000);
  },
};
