import { defineComponent, h, inject, computed } from "vue"
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface"

const pointProps = {
  x:{
    type: Number,
    default: 0
  },
  y:{
    type: Number,
    default: 0
  }
}
export default defineComponent({
  name: 'Point',
  props: pointProps,
  setup(props){
    const { scaleX, scaleY } = inject(mafsContextInjectionKey, defaultMafsContext)
    const cx = computed(() => scaleX.value(props.x))
    const cy = computed(() => scaleY.value(props.y))
    const r = computed(() => scaleX.value(1/10))
    return {
      cx,
      cy,
      r
    }
  },
  render() {
    return (
      <circle
        cx={this.cx}
        cy={this.cy}
        r={this.r}
      ></circle>
    )
  }
})