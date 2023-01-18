import Mafsv from 'mafsv'
import DefaultTheme from 'vitepress/theme'
import Demo from '../vitepress/component/vp-demo.vue'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(Mafsv)
    app.component('Demo', Demo)
  },
}
