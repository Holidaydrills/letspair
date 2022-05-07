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
      console.log(`state.tasks = ${JSON.stringify(state.tasks)}`);
    },
    addNewLane(state: State, lane: Lane) {
      state.lanes.push(lane);
      console.log(`Add new lane: ${JSON.stringify(lane)}`);
    },
    addTaskToLane(state: State, task: Task) {
      const lane = state.lanes.find((lane) => lane.id === task.laneId);
      if (!lane) {
        console.error(`Lane with id ${task.laneId} does not exist!`);
        return;
      }
      console.log(`Found lane ${JSON.stringify(lane)}`);
      if (lane.tasks) {
        lane.tasks.push(task);
      } else {
        lane.tasks = [task];
      }
      console.log(`pushed task: ${JSON.stringify(lane)}`);
    },
    addUserToLane(state: State, user: User) {
      const lane = state.lanes.find((lane) => lane.id === user.laneId);
      if (!lane) {
        console.error(`Lane with id ${user.laneId} does not exist!`);
        return;
      }
      console.log(`Found lane ${JSON.stringify(lane)}`);
      if (lane.users) {
        lane.users.push(user);
      } else {
        lane.users = [user];
      }
      console.log(`pushed user: ${JSON.stringify(lane)}`);
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
  },
};
