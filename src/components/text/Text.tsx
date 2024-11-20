import { computed, defineComponent, h, inject } from "vue";
import { defaultMafsContext, mafsContextInjectionKey } from "../mafs/interface";

const textProps = {
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
  name: "Text",
  props: textProps,
  setup(props) {
    const { scaleX, scaleY } = inject(
      mafsContextInjectionKey,
      defaultMafsContext,
    );
    const xOffset = computed(() => scaleX.value(props.x));
    const yOffset = computed(() => scaleY.value(props.y));
    return {
      xOffset,
      yOffset,
    };
  },
  render() {
    return (
      <text
        text-anchor="middle"
        dominant-baseline="central"
        style={{ fill: "var(--m-text-color)" }}
        x={this.xOffset}
        y={this.yOffset}
      >
        {this.$slots.default?.()}
      </text>
    );
  },
});
