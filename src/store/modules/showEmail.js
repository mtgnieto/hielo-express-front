export const showEmail = {
  namespaced: true,
  state: {
    showEmail: false,
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
      state.showEmail = true;
    },
    hide(state) {
      state.showEmail = false;
    },
  }
};