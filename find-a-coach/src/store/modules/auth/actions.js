export default {
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
};
