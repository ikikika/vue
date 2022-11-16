export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url = process.env.VUE_APP_API_URL + '/login';

    if (mode === 'signup') {
      url = process.env.VUE_APP_API_URL + '/signup';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    const responseData = await response.json();

    if (!response.ok || responseData.error) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
};
