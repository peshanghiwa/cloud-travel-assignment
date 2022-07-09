import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "@vueform/slider/themes/default.css";
import clickOutside from "./directives/clickOutside.js";
import Popper from "vue3-popper";
import Shimmer from "vue3-shimmer";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App);
app.use(clickOutside);
app.use(VueAwesomePaginate);
app.use(Shimmer);
app.component("Popper", Popper);
app.mount("#app");
