import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "@vueform/slider/themes/default.css";
import clickOutside from "./directives/click-outside.js";

const app = createApp(App);
app.use(clickOutside);
app.mount("#app");
