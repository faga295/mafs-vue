import { defineComponent, computed, h, inject } from "vue"
import { range } from '../../utils/range'
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface"

const gridPatternProps = {
  id: {
    type: String
  },
  xLines: {
    type: Number,
    default: 1
  },
  yLines: {
    type: Number,
    default: 1
  },
  subdivision: {
    type: Number,
    default: 1
  }
}
export default defineComponent({
  name: 'GridPattern',
  props: gridPatternProps,
  setup(props){
    const { scaleX, scaleY } = inject(mafsContextInjectionKey, defaultMafsContext)

    // scale to real pixel
    const width = computed(() => props.xLines * scaleX.value)
    const height = computed(() => props.yLines * scaleY.value)
		
    const xs = computed(() => range(0, props.xLines * width.value, 1/props.subdivision * width.value))
    const ys = range(0, props.yLines * height.value, 1/props.subdivision * height.value)
        
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
        {this.xs.map((xAxis: number) => (
          <line
            x1={xAxis} 
            x2={xAxis} 
            y1={0} 
            y2={this.height} 
            style={{stroke: 'var(--m-grid-subdivision-color)'}}
          ></line>
        ))}
        {this.ys.map((yAxis: number) => (
          <line 
            x1={0}  
            y1={yAxis}
            x2={this.width}
            y2={yAxis}
            style={{
              stroke: 'var(--m-grid-subdivision-color)'
            }}
          >
          </line>
        ))}
        <line
          x1={this.width}
          x2={this.width}
          y1={0}
          y2={this.height}
          style={{stroke: 'var(--m-grid-line-color)'}}
        ></line>
        <line
          x1={0}
          x2={this.width}
          y1={this.height}
          y2={this.height}
          style={{stroke: 'var(--m-grid-line-color)'}}
        ></line>
      </pattern>
    )
  }
})