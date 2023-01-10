import { divide } from '../../utils/division'
import {
  defineComponent,
  h,
  inject,
  type PropType
} from 'vue'
import { defaultMafsContext, defaultPaneContext, mafsContextInjectionKey, paneContextInjectionKey } from '../mafs/interface'

type Fx = (x: number) => number
const plotOfxProps = {
  y: {
    type: Function as PropType<Fx>,
    default: () => 0 
  } 
}
export default defineComponent({
  name: 'PlotOfx',
  props: plotOfxProps,
  setup(props){
    console.log(props.y)
    
    const paneContext = inject(paneContextInjectionKey, defaultPaneContext)
    const mafsContext = inject(mafsContextInjectionKey, defaultMafsContext)

    const { scaleX, scaleY } = mafsContext
    const { xRange } = paneContext
    const range = divide(xRange[0], xRange[1], 500)
    const d = range.map((x, index) => {
      if(!index) return `M ${x * scaleX},${props.y(x) * scaleY}`
      return `L ${x * scaleX},${props.y(x) * scaleY}`
    }).join(" ")
    return {
      d
    }
  },
  render(){
    return (
      <path 
        d={this.d}
        stroke-width={3}
        fill="none"
        stroke-linecap="round"
        stroke-line-join="round"
        
        style={{stroke:'var(--m-grid-line-color)'}}
      ></path>
    )
  }
})