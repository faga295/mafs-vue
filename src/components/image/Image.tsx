import {
  computed,
  defineComponent,
  h,
  inject,
  PropType,
  type SVGAttributes,
} from "vue";
import {
  defaultMafsContext,
  mafsContextInjectionKey,
} from "../mafs/interface";
import { computeAnchor } from "../../utils/math";
import type { Anchor } from "../../utils/math";

const anchors: Anchor[] = [
  "tl",
  "tc",
  "tr",
  "cl",
  "cc",
  "cr",
  "bl",
  "bc",
  "br",
];

const imageProps = {
  href: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  anchor: {
    type: String as PropType<Anchor>,
    default: "bl",
    validator(value: string) {
      return anchors.includes(value as Anchor);
    },
  },
  preserveAspectRatio: {
    type: String,
    default: undefined,
  },
  svgImageProps: {
    type: Object as PropType<SVGAttributes>,
    default: () => ({}),
  },
};

export default defineComponent({
  name: "Image",
  inheritAttrs: false,
  props: imageProps,
  setup(props) {
    const { scaleX, scaleY } = inject(
      mafsContextInjectionKey,
      defaultMafsContext,
    );

    const anchorValue = computed<Anchor>(() => props.anchor ?? "bl");
    const xValue = computed<number>(() => props.x ?? 0);
    const yValue = computed<number>(() => props.y ?? 0);
    const widthValue = computed<number>(() => props.width ?? 0);
    const heightValue = computed<number>(() => props.height ?? 0);

    const anchorPosition = computed(() => {
      const [anchorX, anchorY] = computeAnchor(
        anchorValue.value,
        xValue.value,
        yValue.value,
        widthValue.value,
        heightValue.value,
      );
      return { anchorX, anchorY } as const;
    });

    const xPosition = computed(() =>
      scaleX.value(anchorPosition.value.anchorX),
    );

    const yPosition = computed(() =>
      scaleY.value(anchorPosition.value.anchorY),
    );

    const widthPx = computed(() =>
      Math.abs(scaleX.value(widthValue.value) - scaleX.value(0)),
    );

    const heightPx = computed(() =>
      Math.abs(scaleY.value(heightValue.value) - scaleY.value(0)),
    );

    return {
      xPosition,
      yPosition,
      widthPx,
      heightPx,
    };
  },
  render() {
    const extraAttrs = {
      ...(this.svgImageProps as Record<string, unknown>),
      ...this.$attrs,
    } as Record<string, unknown>;

    return (
      <image
        href={this.href}
        x={this.xPosition}
        y={this.yPosition}
        width={this.widthPx}
        height={this.heightPx}
        preserveAspectRatio={this.preserveAspectRatio}
        {...extraAttrs}
      ></image>
    );
  },
});

export type { Anchor } from "../../utils/math";
