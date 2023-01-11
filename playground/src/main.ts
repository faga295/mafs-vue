import { createApp } from 'vue'
import Mafsv from 'mafsv'
import './style.css'
import 'mafsv/dist/index.css'
import App from './App.vue'


const app = createApp(App)
app.use(Mafsv)
app.mount('#app')
