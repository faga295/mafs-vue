# Mafs-vue(WIP)
Vue Component for interactive math, reproduction of [mafs](https://github.com/stevenpetryk/mafs)

## Install
```
# npm
npm install mafsv

# yarn
yarn add mafsv

# pnpm
pnpm install mafsv 
```

## Usage

### Global import
import all of `Mafsv` component as global component
```javascript
import { createApp } from 'vue'
import Mafsv from 'mafsv'
import 'mafsv/dist/index.css'
import App from './App.vue'


const app = createApp(App)
app.use(Mafsv)
app.mount('#app')
```
### Unplugin import(WIP)
use [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) to import components

### f(x)
plot your first f(x) in your project
```javascript
<Mafs>
    <CartesianCoordinates></CartesianCoordinates>
    <PlotOfx :y="Math.sin"></PlotOfx>
</Mafs>
```
![](https://lzc-personal-resource.oss-cn-beijing.aliyuncs.com/20230129141130.png)