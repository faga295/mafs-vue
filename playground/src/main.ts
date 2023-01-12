import { createApp } from 'vue'
import Mafsv from 'mafsv'
import './style.css'
import '../../src/style/mafs.scss'
import App from './App.vue'


const app = createApp(App)
app.use(Mafsv)
app.mount('#app')
