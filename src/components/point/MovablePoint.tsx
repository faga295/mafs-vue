import { defineComponent, h, inject, onMounted, ref, watchEffect } from 'vue'
import useDrag from '../../utils/useDrag'
import Point from './Point'
import { defaultMafsContext, mafsContextInjectionKey } from '../mafs/interface'

const movablePointProps = {
  x: Number,
  y: Number,
}

export default defineComponent({
  name: "MovablePoint",
  props: movablePointProps,
  setup(props) {
    const pointRef = ref()
    const { scaleX, scaleY } = inject(mafsContextInjectionKey, defaultMafsContext)
    // const { x, y, style } = useDraggable(pointRef.value?.$el, {
    //   onMove(position){
    //     console.log(position)
    //   }
    // })
    const cx = ref(props.x ?? 0)
    const cy = ref(props.y ?? 0)
    
    onMounted(() => {
      useDrag(pointRef.value.$el, {
        stopPropagation: true,
        preventDefault: true,
        
        onMove(position, {mx, my}){
          console.log(mx, my)
            
          cx.value += mx / scaleX.value(1)
          cy.value += my/ scaleY.value(1)
          //   const mx = position.x - (mafsSvgRect.value?.left ?? 0)
          //   const my = position.y - (mafsSvgRect.value?.top ?? 0)
          //   offset.value[0] = (-mx/width.value * xSpan)  + offsetStore[0]
          //   offset.value[1] = (my/height.value * ySpan) + offsetStore[1]
        }
      })
    })
    
    return {
      pointRef,
      cx,
      cy
    //   style,
    }
  },
  render(){
    return (
      <Point x={this.cx} y={this.cy} ref="pointRef" ></Point>
    )
  }
})