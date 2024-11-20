import Mafsv from "mafsv";
import DefaultTheme from "vitepress/theme";
import Demo from "../vitepress/component/vp-demo.vue";
import naiveUI from "naive-ui";
import "uno.css";
import "../../../src/style/index.scss";
import "../vitepress/style/code.scss";

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(Mafsv);
    app.use(naiveUI);
    app.component("Demo", Demo);
  },
};
