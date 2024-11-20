import {
  defineComponent,
  h,
  inject,
  computed,
  defineExpose,
  defineProps,
  watchEffect,
  ref,
} from "vue";
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface";

export interface PointPropsType {
  x: number;
  y: number;
}
const pointProps = {
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
};
export default defineComponent({
  name: "Point",
  props: pointProps,
  setup(props, { expose }) {
    const { scaleX, scaleY } = inject(
      mafsContextInjectionKey,
      defaultMafsContext,
    );
    const circleRef = ref();
    const cx = computed(() => scaleX.value(props.x));
    const cy = computed(() => scaleY.value(props.y));
    const r = computed(() => scaleX.value(1 / 10));

    expose({
      x: ref(props.x),
      y: ref(props.y),
      $el: circleRef,
    });
    return {
      cx,
      cy,
      r,
      circleRef,
    };
  },
  render() {
    return (
      <circle
        ref="circleRef"
        cx={this.cx}
        cy={this.cy}
        r={this.r}
        style={{
          stroke: "var(--m-fg)",
          fill: "var(--m-fg)",
        }}
      ></circle>
    );
  },
});
