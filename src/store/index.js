import Vue from 'vue'
import Vuex from 'vuex'
import userData from './modules/userData'
import { loader } from './modules/loader'
import { showEmail } from './modules/showEmail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userData,
    loader,
    showEmail
  },
})
