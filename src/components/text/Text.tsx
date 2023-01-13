import { computed, defineComponent, h, inject } from "vue"
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface"

const textProps = {
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  }
}
export default defineComponent({
  name: 'Text',
  props: textProps,
  setup(props){
    const { scaleX, scaleY } = inject(mafsContextInjectionKey, defaultMafsContext)
    const xOffset = computed(() => props.x * scaleX.value)
    const yOffset = computed(() => -props.y * scaleY.value)
    return {
      xOffset,
      yOffset
    }
  },
  render(){
    return (
      <text
        x={this.xOffset}
        y={this.yOffset}
      >{this.$slots.default?.()}</text>
    )
  }
})