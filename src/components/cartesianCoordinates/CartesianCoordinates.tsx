import { defineComponent, h, Fragment } from "vue";
import GridPattern from "./GridPattern";
import './style/index.css'
let increment = 1
export default defineComponent({
    name: "CartesianCoordinates",
    setup(){
        const id = `mafs-grid-${increment++}`
        return {
            id
        }
    },
    render(){
        return (
            <>
                <defs>
                    <GridPattern id={this.id} xLines={1} yLines={1}></GridPattern>
                </defs>
                <rect fill={`url(#${this.id})`} width="200" height={200} x={0} y={0}></rect>
                {/* <line x1={0} x2={1} y1={0} y2={4} style={{stroke: '#000'}}></line> */}
            </>
        )
    }
})