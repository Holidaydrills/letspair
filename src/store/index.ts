import { User } from "@/models/User";
import { Task } from "@/models/Task";
import { createStore, Store } from "vuex";
import { getAllUsers } from "@/services/UserService";
import { getAllTasks } from "@/services/TaskService";
import { InjectionKey } from "vue";

export type State = {
  users: Array<User>;
  tasks: Array<Task>;
};

// Enables the useStore function that's needed to access the store when using Composition API
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state(): State {
    return { users: [], tasks: [] };
  },
  mutations: {
    getAllUsers(state: State, users: Array<User>) {
      state.users = users;
    },
    getAllTasks(state: State, tasks: Array<Task>) {
      state.tasks = tasks;
      console.log(`state.tasks = ${JSON.stringify(state.tasks)}`);
    },
  },
  actions: {
    async getAllUsers({ commit }) {
      commit("getAllUsers", await getAllUsers());
    },
    async getAllTasks({ commit }) {
      commit("getAllTasks", await getAllTasks());
    },
  },
});
