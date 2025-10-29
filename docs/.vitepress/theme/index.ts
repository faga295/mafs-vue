import Mafsv from "mafsv";
import DefaultTheme from "vitepress/theme";
import Demo from "../vitepress/component/vp-demo.vue";
import naive from "naive-ui";
import "uno.css";
import "../../../src/style/index.scss";
import "../vitepress/style/code.scss";

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    if (typeof window !== "undefined") {
      app.use(Mafsv);
      app.use(naive);
      app.component("Demo", Demo);
    }

    
  },
};
