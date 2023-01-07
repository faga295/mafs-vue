import { defineComponent, computed, h } from "vue";
import { range } from '../../utils/range'

const gridPatternProps = {
    id: {
        type: String
    },
    xLines: {
        type: Number
    },
    yLines: {
        type: Number
    },
    xSubDivision: {
        type: Number
    },
    ySubDivsion: {
        type: Number
    }
}
export default defineComponent({
    name: 'GridPattern',
    props: gridPatternProps,
    setup(props){
        const width = computed(() => props.xLines * 50)
        const height = computed(() => props.yLines * 50)
        const xs = range(props.xLines, props.xSubDivision || 1)
        const ys = range(props.yLines, props.ySubDivsion || 1)
        console.log(xs,ys);
        
        return {
            width,
            height,
            xs,
            ys
        }
    },
    render(){
        return (
            <pattern id={this.id}  patternUnits="userSpaceOnUse" width={this.width} height={this.height}>
              {this.xs.map(xAxis => {
                return <line x1={xAxis} x2={xAxis} y1={0} y2={this.height} style={{stroke: '#000'}}></line>
              })}
              {this.ys.map(yAxis => <line 
                x1={0}  
                y1={yAxis}
                x2={this.width}
                y2={yAxis}
                style={{
                    stroke: '#000'
                }}
              >
              </line>)}
            </pattern>
        )
    }
})