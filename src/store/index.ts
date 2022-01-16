import { User } from "@/models/User";
import { createStore, Store } from "vuex";
import { getAllUsers } from "@/services/UserService";
import { InjectionKey } from "vue";

export type State = {
  users: Array<User>;
};

// Enables the useStore function that's needed to access the store when using Composition API
export const key: InjectionKey<Store<State>> = Symbol();

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
