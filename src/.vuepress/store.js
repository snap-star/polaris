// .vuepress/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login({ commit }) {
      // Implementasi login
      commit('login');
    },
    logout({ commit }) {
      // Implementasi logout
      commit('logout');
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
});