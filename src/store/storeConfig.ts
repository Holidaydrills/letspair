import { User } from "@/models/User";
import { Task } from "@/models/Task";
import { getAllUsers } from "@/services/UserService";
import { getAllTasks } from "@/services/TaskService";
import { addNewLane } from "@/services/PairingBoardService";
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
    addNewLane(state: State, lane: Lane) {
      state.lanes.push(lane);
      console.log(`Add new lane: ${JSON.stringify(lane)}`);
    },
    addTaskToLane(state: State, task: Task) {
      state.lanes[0].tasks = [task];
      console.log(`Added task to lane: ${JSON.stringify(state.lanes)}`);
    },
  },
  actions: {
    async getAllUsers({ commit }) {
      commit("getAllUsers", await getAllUsers());
    },
    async getAllTasks({ commit }) {
      commit("getAllTasks", await getAllTasks());
    },
    async addNewLane({ commit }) {
      commit("addNewLane", await addNewLane());
    },

    async addTaskToLane({ commit }, task: Task) {
      commit("addTaskToLane", task);
    },
  },
};
