export const state = () => ({
  user: null,
});

export const getters = {
  isLoggedIn(state) {
    return state.user !== null;
  },
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

export const actions = {};
