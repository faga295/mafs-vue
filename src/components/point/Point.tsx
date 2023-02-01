import { defineComponent, h, inject, computed, defineExpose, defineProps, watchEffect, ref } from "vue"
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface"

export interface PointPropsType {
  x: number,
  y: number
}
const pointProps = {
  x: Number,
  y: Number
}
export default defineComponent({
  name: 'Point',
  props: pointProps,
  setup(props, {expose}){
    const { scaleX, scaleY } = inject(mafsContextInjectionKey, defaultMafsContext)
    const cx = computed(() => scaleX.value(props?.x ?? 0))
    const cy = computed(() => scaleY.value(props?.y ?? 0))
    const r = computed(() => scaleX.value(1/10))
    expose({
      x: ref(props.x),
      y: ref(props.y)
    })
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
        style={{
          stroke: "var(--m-fg)",
          fill: "var(--m-fg)"
        }}
      ></circle>
    )
  }
})