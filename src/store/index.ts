import { User } from "@/models/User";
import { createStore } from "vuex";
import { getAllUsers } from "@/services/UserService";

export type State = {
  users: Array<User>;
};

export const store = createStore({
  state(): State {
    return { users: [] };
  },
  mutations: {
    getAllUsers(state: State) {
      state.users = getAllUsers();
    },
  },
});
