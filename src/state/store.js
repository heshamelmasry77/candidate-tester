import { createStore } from "vuex";
import home from "./modules/home";

// Create a new store instance.
const store = createStore({
  // State, Mutations, Getters, Actions and Modules
  modules: {
    home,
  },
  state() {
    // = data
    return {
      count: 0,
    };
  },

  getters: {
    // = computed properties
  },
  actions: {
    // api calls etc
  }, // = methods
  mutations: {
    // = are responsible for setting and updating the state ONLY
  },
});

// actions decide when a mutation should fire
// while mutations are always the ones responsible for state changes
// never change a state directly in an action

export default store;
