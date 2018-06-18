import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shared: 1,
  },
  mutations: {
    UPDATE_SHARED(state, payload) {
      this.state.shared = payload;
    },
  },
  actions: {
    updateShared({ commit }, payload) {
      commit('UPDATE_SHARED', payload);
    },
  },
  getters: {
    getShared: state => state.shared,
  },
});
