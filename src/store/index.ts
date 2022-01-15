import { createStore } from "vuex";

export type State = {
  count: number;
};

export const store = createStore({
  state(): State {
    return { count: 0 };
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
  },
});
