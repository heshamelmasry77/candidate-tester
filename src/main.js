import { createApp } from "vue";

import "./style.css";
import store from "./state/store";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// icons config
import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
  FaHome,
  OiSearch,
  BiPersonFill,
  MdLivetv,
  GiRead,
  FaThList,
  BiPlayCircle,
  LaStarSolid,
} from "oh-vue-icons/icons";

addIcons(
  FaHome,
  OiSearch,
  BiPersonFill,
  MdLivetv,
  GiRead,
  FaThList,
  BiPlayCircle,
  LaStarSolid
);
app.component("v-icon", OhVueIcon);
app.use(store);

app.use(router).mount("#app");
