import Mafsv from 'mafsv'
import DefaultTheme from 'vitepress/theme'
import Demo from '../vitepress/component/vp-demo.vue'
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'uno.css'
import '../../../src/style/index.scss'
import '../vitepress/style/code.scss'

hljs.registerLanguage('javascript', javascript);

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(Mafsv)
    app.use(hljsVuePlugin)
    app.component('Demo', Demo)
  },
}
