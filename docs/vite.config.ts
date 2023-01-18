import { defineConfig } from 'vite'
import path from 'path'
import { MarkdownTransform } from './.vitepress/plugins/mdTransform'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^mafsv$/,
        replacement: path.resolve(__dirname, '../src/index')
      },
      {
        find: '~/',
        replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
      },
    ]
  },
  plugins: [ MarkdownTransform()]
})