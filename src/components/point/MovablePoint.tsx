import {
  defineComponent,
  h,
  inject,
  onMounted,
  ref,
  computed,
  watch,
} from "vue";
import useDrag from "../../utils/useDrag";
import Point from "./Point";
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface";

const movablePointProps = {
  x: Number,
  y: Number,
};

export default defineComponent({
  name: "MovablePoint",
  props: movablePointProps,
  setup(props, { expose }) {
    const pointRef = ref();
    const { scaleX, scaleY } = inject(
      mafsContextInjectionKey,
      defaultMafsContext,
    );
    const cx = ref<number>(props.x ?? 0);
    const cy = ref(props.y ?? 0);
    const r = computed(() => scaleX.value(1 / 10));
    const r1 = computed(() => scaleX.value(1 / 6));
    const r2 = computed(() => scaleX.value(1 / 4));
    const r3 = computed(() => scaleX.value(1 / 2));

    const pointR = ref(r.value);
    watch(r, (r) => {
      pointR.value = r;
    });
    onMounted(() => {
      useDrag(pointRef.value, {
        stopPropagation: true,
        preventDefault: true,
        onMove(_, { mx, my }) {
          cx.value += mx;
          cy.value += my;
        },
      });
    });
    expose({
      x: cx,
      y: cy,
    });

    return {
      pointRef,
      cx,
      cy,
      r,
      r1,
      r2,
      r3,
      pointR,
    };
  },
  render() {
    return (
      <g>
        {/* <circle cx={this.cx} cy={this.cy} r={this.r2} style={{fill: 'var(--m-movable-point-color)'}}></circle> */}
        <circle
          cx={this.cx}
          cy={this.cy}
          r={this.pointR}
          class="mafs-movable-point-point"
        ></circle>
        <circle
          cx={this.cx}
          cy={this.cy}
          r={this.r2}
          class="mafs-movable-point-ring"
        ></circle>
        <circle
          cx={this.cx}
          cy={this.cy}
          r={this.r3}
          ref="pointRef"
          class="mafs-movable-point-hitbox"
          onMouseenter={() => (this.pointR = this.r1)}
          onMouseleave={() => (this.pointR = this.r)}
          style={{ "--m-movable-point-hover-size": this.r2 }}
        ></circle>
      </g>
    );
  },
});
