import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

type Fn = () => void;

interface Position {
  x: number;
  y: number;
}
interface Mv {
  mx: number;
  my: number;
}

interface Options {
  preventDefault?: boolean;
  stopPropagation?: boolean;
  onStart?: (position: Position, e: PointerEvent) => false | void;
  onMove?: (position: Position, mv: Mv, e: PointerEvent) => void;
  onEnd?: (position: Position, e: PointerEvent) => void;
}

export default function useDrag(
  target: HTMLElement | undefined | null,
  options: Options,
) {
  if (!target) return;
  const draggingElement = window;
  const pressedDelta = ref();
  const position = ref<Position>({ x: 0, y: 0 });
  const handleEvent = (e: PointerEvent) => {
    if (options.preventDefault) e.preventDefault();
    if (options.stopPropagation) e.stopPropagation();
  };
  const start = (e: PointerEvent) => {
    const pos = {
      x: e.clientX,
      y: e.clientY,
    };
    if (options.onStart?.(pos, e) === false) return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e: PointerEvent) => {
    if (!pressedDelta.value) return;
    const { left, right, top, bottom } = target.getBoundingClientRect();
    if (
      e.clientX < left ||
      e.clientX > right ||
      e.clientY < top ||
      e.clientY > bottom
    )
      return;
    position.value = {
      x: e.clientX,
      y: e.clientY,
    };
    const mv = {
      mx: position.value.x - pressedDelta.value.x,
      my: position.value.y - pressedDelta.value.y,
    };
    pressedDelta.value = position.value;
    options.onMove?.(position.value, mv, e);
    handleEvent(e);
  };
  const end = (e: PointerEvent) => {
    if (!pressedDelta.value) return;
    pressedDelta.value = undefined;
    options.onEnd?.(position.value, e);
    handleEvent(e);
  };

  useEventListener(target, "pointerdown", start);
  useEventListener(draggingElement, "pointermove", move);
  useEventListener(draggingElement, "pointerup", end);
}
