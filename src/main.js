import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "@vueform/slider/themes/default.css";
import clickOutside from "./directives/clickOutside.js";
import Popper from "vue3-popper";

const app = createApp(App);
app.use(clickOutside);
app.component("Popper", Popper);
app.mount("#app");
