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
    getAllUsers(state: State) {
      state.users = getAllUsers();
    },
    getAllTasks(state: State) {
      state.tasks = getAllTasks();
      console.log(`state.tasks = ${JSON.stringify(state.tasks)}`);
    },
  },
});
