import Mafsv from 'mafsv'
import type { Theme } from 'vitepress'

export default {
  enhanceApp: ({ app }) => {
    app.use(Mafsv)
  },
}
