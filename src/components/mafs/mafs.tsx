import { 
  defineComponent,
  ref,
  h,
  provide,
  onMounted,
  computed,
  watch,
  type PropType
} from "vue"
import { type MafsContext, mafsContextInjectionKey, paneContextInjectionKey, ViewBox } from "./interface"
import { useResizeObserver } from "@vueuse/core"

export const mafsProps = {
  width: {
    validator(value: number | string){
      return typeof value === 'number' || value === 'auto'
    }, 
    default: 'auto'
  },
  height:{
    type: [Number],
    default: 500 
  },
  viewBox:{
    type: Object as PropType<ViewBox>,
    default: () => ({
      x: [-6, 6],
      y: [-6, 6],
      padding: 0.5
    })
  }
}

const Mafs = defineComponent({
  name:'Mafs',
  props: mafsProps,
  setup(props){
    const { viewBox } = props
    const width = ref<number>(1)
    const height = ref<number>(props.height)

    const desiredWidth = props.width === 'auto' ? '100%' : props.width

    const mafsContainerRef = ref<HTMLElement | null>(null)

    const scaleX = computed(() => width.value/(viewBox.x[1] - viewBox.x[0] + (viewBox?.padding ?? 0.5)))
    const scaleY = computed(() => height.value/(viewBox.y[1] - viewBox.y[0] + (viewBox?.padding ?? 0.5)))
    const mafsContext:MafsContext = {
      scaleX,
      scaleY
    }
   
    watch(scaleX, () => {
      console.log(scaleX.value)
    })
    onMounted(() => {
      useResizeObserver(mafsContainerRef, (entries) => {
        const entry = entries[0]
        width.value = entry.contentRect.width
      })
    })
    provide(
      mafsContextInjectionKey,
      mafsContext 
    )
    provide(
      paneContextInjectionKey,
      {
        width: width,
        height: height,
        xRange: [ref(0), ref(0)],
        yRange: [ref(0), ref(0)]
      }
    )
    
    return {
      mafsContainerRef,
      width,
      height,
      desiredWidth,
    }
  },
  render(){
    return (
      <div class={`mafs-container`} ref="mafsContainerRef" style={{"width": this.desiredWidth}}>
        <svg width={this.width} height={this.height}  preserveAspectRatio="xMidYMin" viewBox={`${-Math.round(this.width/2)} ${-Math.round(this.height/2)} ${this.width} ${this.height}`}>
          {
            this.$slots.default?.()
          }
        </svg>
      </div>
    )
  }
})
export default Mafs
export type mafsType = typeof Mafs