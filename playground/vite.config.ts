import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^mafsv$/,
        replacement: path.resolve(__dirname, '../src/index')
      }
    ]
  },
  esbuild:{
    jsx: "transform",
    jsxFactory: "h",
    jsxFragment: "Fragment"
  }
})
