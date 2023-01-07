import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Mafsv from 'mafsv'


const app = createApp(App)
app.use(Mafsv)
app.mount('#app')
