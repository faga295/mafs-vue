import { InjectionKey, ref, type Ref } from "vue"

export const mafsContextInjectionKey:InjectionKey<MafsContext> = Symbol('mafs-context')

export const defaultMafsContext:MafsContext = {
  scaleX: ref(42),
  scaleY: ref(42)
}

export interface MafsContext {
  scaleX: Ref<number>,
  scaleY: Ref<number>,
}

export const paneContextInjectionKey:InjectionKey<PaneContext> = Symbol('pane-context')

export interface PaneContext {
  width: Ref<number>,
  height: Ref<number>,
  xRange: Ref<number>[],
  yRange: Ref<number>[] 
}

export const defaultPaneContext:PaneContext = {
  width: ref(500),
  height: ref(500),
  xRange: [ref(0), ref(0)],
  yRange: [ref(0), ref(0)],
}

export interface ViewBox {
  x: [number, number],
  y: [number, number],
  padding?: number
}