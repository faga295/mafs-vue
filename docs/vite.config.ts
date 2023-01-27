import { defineConfig } from 'vite'
import path from 'path'
import { MarkdownTransform } from './.vitepress/plugins/mdTransform'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

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
  esbuild:{
    jsx: "transform",
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  plugins: [ 
    MarkdownTransform(), 
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        // ...custom presets
      ],
    }),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})