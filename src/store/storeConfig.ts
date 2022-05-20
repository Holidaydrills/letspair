import { User } from "@/models/User";
import { Task } from "@/models/Task";
import { getAllUsers } from "@/services/UserService";
import { getAllTasks } from "@/services/TaskService";
import { addNewLane } from "@/services/PairingBoardService";
import { StoreOptions } from "vuex";
import { Lane } from "@/models/Lane";

export type State = {
  users: Array<User>;
  tasks: Array<Task>;
  lanes: Array<Lane>;
};

export const options: StoreOptions<State> = {
  state(): State {
    return {
      users: [],
      tasks: [],
      lanes: [],
    };
  },
  mutations: {
    getAllUsers(state: State, users: Array<User>) {
      state.users = users;
    },
    getAllTasks(state: State, tasks: Array<Task>) {
      state.tasks = tasks;
    },
    addNewLane(state: State, lane: Lane) {
      state.lanes.push(lane);
    },
    addTaskToLane(state: State, task: Task) {
      const lane = state.lanes.find((lane) => lane.id === task.laneId);
      if (!lane) {
        return;
      }
      const taskFromState = state.tasks.find(
        (taskFromState) => taskFromState.id === task.id
      );
      if (taskFromState) {
        taskFromState.laneId = task.laneId;
      }
    },
    addUserToLane(state: State, user: User) {
      const lane = state.lanes.find((lane) => lane.id === user.laneId);
      if (!lane) {
        return;
      }
      const userFromState = state.users.find(
        (userFromState) => userFromState.id === user.id
      );
      if (userFromState) {
        userFromState.laneId = user.laneId;
      }
      console.log(`pushed user: ${JSON.stringify(lane)}`);
    },
    removeTaskFromLane(state: State, task: Task) {
      const taskFromState = state.tasks.find(
        (taskFromState) => taskFromState.id === task.id
      );
      if (taskFromState) {
        taskFromState.laneId = undefined;
      }
    },
    removeUserFromLane(state: State, user: User) {
      const userFromState = state.users.find(
        (userFromState) => userFromState.id === user.id
      );
      if (userFromState) {
        userFromState.laneId = undefined;
      }
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
    async addUserToLane({ commit }, user: User) {
      commit("addUserToLane", user);
    },
    async removeTaskFromLane({ commit }, task: Task) {
      commit("removeTaskFromLane", task);
    },
    async removeUserFromLane({ commit }, user: User) {
      commit("removeUserFromLane", user);
    },
  },
  getters: {
    openTasks(state) {
      return state.tasks.filter((task) => !task.laneId);
    },
    availableUsers(state) {
      return state.users.filter((user) => !user.laneId);
    },
    tasksForLaneId: (state) => (laneId: string) => {
      return state.tasks.filter((task) => task.laneId === laneId);
    },

    usersForLaneId: (state) => (laneId: string) => {
      return state.users.filter((user) => user.laneId === laneId);
    },
  },
};
