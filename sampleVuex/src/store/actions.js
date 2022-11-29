export default {
  // actions can run async code, mutations cannot
  // dun update state in actions. update state in mutations

  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
};
