export default {
  async login(context, payload) {
    const response = await fetch(process.env.VUE_APP_API_URL + '/login', {
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

    console.log(responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  async signup(context, payload) {
    const response = await fetch(process.env.VUE_APP_API_URL + '/signup', {
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

    console.log(responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
};
