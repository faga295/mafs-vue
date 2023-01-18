# Usage
mafs-vue designed to provide more import solutions responding to various user demand.
## Full import
If you dont' care about bundle size, `full import` is a more convenient way.
```ts
// main.ts
import { createApp } from 'vue'
import Mafsv from 'mafsv'
import 'mafsv/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Mafsv)
app.mount('#app')
```
now every mafsv component are registered as global component, so you can use mafsv component without import.
## Volar support
If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.
```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["mafsv/volar.d.ts"]
  }
}
```
## On-demand Import(pr welcome)
Expected to use [unplugin-vue-component](https://github.com/antfu/unplugin-vue-components) to accomplish.