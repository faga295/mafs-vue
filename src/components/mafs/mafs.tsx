import {
  defineComponent,
  ref,
  h,
  provide,
  onMounted,
  computed,
  watch,
  type PropType,
  watchEffect,
} from "vue";
import {
  type MafsContext,
  mafsContextInjectionKey,
  paneContextInjectionKey,
  ViewBox,
} from "./interface";
import { useResizeObserver, useDraggable } from "@vueuse/core";
import useDrag from "../../utils/useDrag";

export const mafsProps = {
  width: {
    validator(value: number | string) {
      return typeof value === "number" || value === "auto";
    },
    default: "auto",
  },
  height: {
    type: [Number],
    default: 500,
  },
  viewBox: {
    type: Object as PropType<ViewBox>,
    default: () => ({
      x: [-6, 6],
      y: [-3, 3],
      padding: 0.5,
    }),
  },
};

const Mafs = defineComponent({
  name: "Mafs",
  props: mafsProps,
  setup(props) {
    const { viewBox } = props;
    const width = ref<number>(500);
    const height = ref<number>(props.height);
    const offset = ref<[number, number]>([0, 0]);
    // some superfluous action since useDraggable design discrepancies
    const offsetStore: [number, number] = [0, 0];

    const desiredWidth = props.width === "auto" ? "100%" : props.width;

    const mafsContainerRef = ref<HTMLElement | null>(null);
    const mafsSvgRef = ref<HTMLElement | null>(null);

    const mafsSvgRect = computed(() =>
      mafsSvgRef.value?.getBoundingClientRect(),
    );

    const padding = viewBox?.padding ?? 0.5;
    const aoi = {
      xMin: computed(() => viewBox.x[0] - padding + offset.value[0]),
      xMax: computed(() => viewBox.x[1] + padding + offset.value[0]),
      yMin: computed(() => viewBox.y[0] - padding + offset.value[1]),
      yMax: computed(() => viewBox.y[1] + padding + offset.value[1]),
    };

    const xSpan = aoi.xMax.value - aoi.xMin.value;
    const ySpan = aoi.yMax.value - aoi.yMin.value;

    const scaleX = computed(
      () => (val: number) =>
        (val * width.value) / (viewBox.x[1] - viewBox.x[0] + padding * 2),
    );
    const scaleY = computed(
      () => (val: number) =>
        (-1 * val * height.value) / (viewBox.y[1] - viewBox.y[0] + padding * 2),
    );
    const mafsContext: MafsContext = {
      scaleX,
      scaleY,
    };

    onMounted(() => {
      useResizeObserver(mafsContainerRef, (entries) => {
        const entry = entries[0];
        width.value = entry.contentRect.width;
      });

      useDrag(mafsSvgRef.value, {
        stopPropagation: true,
        onMove(_, { mx, my }) {
          offset.value[0] += (-mx / width.value) * xSpan;
          offset.value[1] += (my / height.value) * ySpan;
        },
      });
    });
    provide(mafsContextInjectionKey, mafsContext);
    provide(paneContextInjectionKey, {
      width: width,
      height: height,
      xRange: [aoi.xMin, aoi.xMax],
      yRange: [aoi.yMin, aoi.yMax],
    });

    return {
      mafsContainerRef,
      mafsSvgRef,
      width,
      height,
      desiredWidth,
      offset,
      aoi,
      scaleX,
      scaleY,
    };
  },
  render() {
    return (
      <div
        class={`mafs-container`}
        ref="mafsContainerRef"
        style={{ width: this.desiredWidth }}
      >
        <svg
          ref="mafsSvgRef"
          width={this.width}
          height={this.height}
          preserveAspectRatio="xMidYMin"
          style={{ background: "#000" }}
          viewBox={`${this.scaleX(this.aoi.xMin.value)} ${this.scaleY(this.aoi.yMax.value)} ${this.width} ${this.height}`}
        >
          {this.$slots.default?.()}
        </svg>
      </div>
    );
  },
});
export default Mafs;
export type mafsType = typeof Mafs;
