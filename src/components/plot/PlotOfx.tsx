import { divide } from '../../utils/division'
import {
  defineComponent,
  h,
  inject,
  computed,
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
    
    const paneContext = inject(paneContextInjectionKey, defaultPaneContext)
    const mafsContext = inject(mafsContextInjectionKey, defaultMafsContext)

    const { scaleX, scaleY } = mafsContext
    const { xRange } = paneContext
    
    const range = computed(() => divide(xRange[0].value, xRange[1].value, 500))
    
    const d = computed(() =>range.value.map((x, index) => {
      if(!index) return `M ${scaleX.value(x)},${scaleY.value(props.y(x))}`
      return `L ${scaleX.value(x)},${scaleY.value(props.y(x))}`
    }).join(" "))
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