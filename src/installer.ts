import type { App, Component, Plugin } from "vue";
import * as components from "./component";

function registerComponent(app: App, component: Component) {
  const { name } = component;
  if (!name) return;
  const registered = name && app.component(name);
  if (!registered) {
    app.component(name, component);
  }
}

export default {
  install(app: App, ...options: any[]) {
    Object.values(components).forEach((component) => {
      registerComponent(app, component);
    });
  },
} as Plugin;
