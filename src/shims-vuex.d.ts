import { Store } from "vuex";
import { State } from "./store";

// Enbales using the store type in vue components
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
