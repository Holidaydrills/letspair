import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { State, options } from "./storeConfig";

// Enables the useStore function that's needed to access the store when using Composition API
export const key: InjectionKey<Store<State>> = Symbol();

// Provide a convenience function that injects the key automatically
export function useStore(): Store<State> {
  return baseUseStore(key);
}

export const store = createStore(options);
