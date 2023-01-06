import { App, Component } from "vue"
import components from './component'

function registerComponent(app:App, component:Component){
    const { name } = component
    const registered = name && app.component(name)
    if(registered) {
        app.component(name, component)
    }
}
export default  {
    install(app: App){
        components.forEach(component => {
            registerComponent(app, component)
        }) 
    }
}