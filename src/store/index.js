import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
    paths: [
      'loggedUser'
    ]
  })],

  state: {
    loggedUser: {}
  },

  getters,
  mutations, 
  actions
})
