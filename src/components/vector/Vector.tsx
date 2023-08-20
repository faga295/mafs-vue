import { computed, defineComponent, h, inject, Fragment, PropType } from "vue";
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface";

const vectorProps = {
  tail: {
    type: Object as PropType<[number, number]>,
    default: [0, 0],
  },
  tip: {
    type: Object as PropType<[number, number]>,
    default: [1, 1],
  },
};
export default defineComponent({
  name: "Vector",
  props: vectorProps,
  setup(props) {
    const { scaleX, scaleY } = inject(
      mafsContextInjectionKey,
      defaultMafsContext
    );

    const tail = computed(() => [
      scaleX.value(props.tail[0]),
      scaleY.value(props.tail[1]),
    ]);
    const tip = computed(() => [
      scaleX.value(props.tip[0]),
      scaleY.value(props.tip[1]),
    ]);
    console.log(tail.value, tip.value);
    return {
      tail,
      tip,
    };
  },
  render() {
    return (
      <>
        <defs>
          <marker
            id="mafsv-triangle"
            refX="8"
            refY="4"
            markerUnits="strokeWidth"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--m-fg)" />
          </marker>
        </defs>
        <g>
          <line
            x1={this.tail[0]}
            y1={this.tail[1]}
            x2={this.tip[0]}
            y2={this.tip[1]}
            marker-end="url(#mafsv-triangle)"
            style={{
              stroke: "var(--m-fg)",
              strokeWidth: 2,
            }}
          ></line>
        </g>
      </>
    );
  },
});
