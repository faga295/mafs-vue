import { App, Component } from "vue"
import * as components from './component'

export * from './component'
function registerComponent(app:App, component:Component){
    const { name } = component
    console.log(component);
    
    const registered = name && app.component(name)
    if(!registered) {
        app.component(name, component)
    }
}

export default  {
    install(app: App){
        Object.values(components).forEach(component => {
            
            registerComponent(app, component)
        })
    }
}
console.log(components);
