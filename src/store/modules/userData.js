// initial state
const state = {
  userData: "",
  userRol: [],
}
const mutations = {
  insertUserData(state, data) {
    state.userData = data
  },
  insertUserRol(state, data) {
    state.userRol = data
  },
}
export default {
  state,
  mutations
}