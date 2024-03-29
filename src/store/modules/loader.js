export const loader = {
  namespaced: true,
  state: {
    loading: false,
    requestsPending: 0,
  },
  actions: {
    show({ commit }) {
      commit("show");
    },
    hide({ commit }) {
      commit("hide");
    },
  },
  mutations: {
    show(state) {
      state.loading = true;
    },
    hide(state) {
      state.loading = false;
    },
  }
};