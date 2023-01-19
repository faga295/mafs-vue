import Mafsv from 'mafsv'
import DefaultTheme from 'vitepress/theme'
import Demo from '../vitepress/component/vp-demo.vue'
import 'uno.css'
import '../../../src/style/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(Mafsv)
    app.component('Demo', Demo)
  },
}
