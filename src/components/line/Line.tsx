import { defineComponent, h, inject, computed, Fragment, ref,  onMounted } from 'vue'
import { mafsContextInjectionKey, defaultMafsContext } from '../mafs/interface'
import { type PointPropsType } from '../point'

export default defineComponent({
  name: 'Line',
  setup(_, {slots}){
    const { scaleX, scaleY } = inject(mafsContextInjectionKey, defaultMafsContext)
    const point1 = slots?.point1?.()
    const point2 = slots?.point2?.()
    // scaleX change is after current component `onMounted` excuted
    const x1= computed(() =>  scaleX.value(point1?.[0].component?.exposed?.x.value ?? 0))
    const x2 = computed(() => scaleX.value(point2?.[0].component?.exposed?.x.value ?? 0))
    
    const y1 = ref(0)
    const y2 = ref(0)
    onMounted(() => {
      // y can't use computed to change, because scaleY will not change
      y1.value = scaleY.value(point1?.[0].component?.exposed?.y.value)
      y2.value = scaleY.value(point2?.[0].component?.exposed?.y.value)
    })
    return {
      x1,
      y1,
      x2,
      y2,
      point1,
      point2
    }
  },
  render(){
    return (
      <>
        <line
          x1={this.x1}
          y1={this.y1}
          x2={this.x2}
          y2={this.y2}
          style={{
            stroke: "var(--m-fg)",
            strokeWidth: 2
          }}
        >
        </line>
        {this.point1}
        {this.point2}
      </>
    )
  }
})