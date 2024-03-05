import { User } from "@/models/user";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: new User(),
  },
  mutations: {
    SET_USER(state, user: User) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user: User) {
      commit("SET_USER", user);
    },
  },
});
