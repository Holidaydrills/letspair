import { User } from "@/models/User";
import { Task } from "@/models/Task";
import { getAllUsers } from "@/services/UserService";
import { getAllTasks } from "@/services/TaskService";
import { StoreOptions } from "vuex";
import { Lane } from "@/models/Lane";

export type State = {
  availableUsers: Array<User>;
  unavailableUsers: Array<User>;
  openTasks: Array<Task>;
  lanes: Array<Lane>;
};

export const options: StoreOptions<State> = {
  state(): State {
    return {
      availableUsers: [],
      unavailableUsers: [],
      openTasks: [],
      lanes: [],
    };
  },
  mutations: {
    getAllUsers(state: State, users: Array<User>) {
      state.availableUsers = users;
    },
    getAllTasks(state: State, tasks: Array<Task>) {
      state.openTasks = tasks;
      console.log(`state.tasks = ${JSON.stringify(state.openTasks)}`);
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
};
