import { 
  defineComponent,
  ref,
  h,
  provide,
  onMounted,
  type PropType
} from "vue"
import { type MafsContext, mafsContextInjectionKey, paneContextInjectionKey, ViewBox } from "./interface"
import { useResizeObserver } from '@vueuse/core'


export const mafsProps = {
  width: {
    type: [Number],
  },
  height:{
    type: [Number],
    default: 500 
  },
  viewBox:{
    type: Object as PropType<ViewBox>
  }
}

const Mafs = defineComponent({
  name:'Mafs',
  props: mafsProps,
  setup(props){
    const width = ref<number>(props.width || 500)
    const height = ref<number>(500)

    const mafsContainerRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      useResizeObserver(mafsContainerRef, (entries) => {
        const entry = entries[0]
        width.value = entry.contentRect.width
      })
    })
    const defaultMafsContext:MafsContext = {
      scaleX: 42,
      scaleY: 42,
    }

    provide(
      mafsContextInjectionKey,
      defaultMafsContext
    )
    provide(
      paneContextInjectionKey,
      {
        width: width.value,
        height: height.value,
        xRange: [0, 0],
        yRange: [0, 0]
      }
    )
    return {
      mafsContainerRef,
      width,
      height
    }
  },
  render(){
    return (
      <div class={`mafs-container`} ref="mafsContainerRef">
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