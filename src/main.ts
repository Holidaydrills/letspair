import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import i18n from "./i18n";

createApp(App).use(i18n).use(store).mount("#app");
