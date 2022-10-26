import { createStore } from "vuex";
import home from "./modules/home";

const store = createStore({
  // State, Mutations, Getters, Actions and Modules
  modules: {
    home,
  },
  state() {
    return {};
  },
  getters: {},
  actions: {},
  mutations: {},
});

export default store;
