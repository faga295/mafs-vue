import { createApp } from "vue";
import Mafsv from "mafsv";
import "../../src/style/index.scss";
import App from "./App.vue";

const app = createApp(App);
app.use(Mafsv);
app.mount("#app");
