import { InjectionKey } from "vue"

export const mafsContextInjectionKey:InjectionKey<MafsContext> = Symbol('mafs-context')

export const defaultMafsContext:MafsContext = {
  scaleX: 42,
  scaleY: 42
}

export interface MafsContext {
  scaleX: number,
  scaleY: number,
}

export const paneContextInjectionKey:InjectionKey<PaneContext> = Symbol('pane-context')

export interface PaneContext {
  width: number,
  height: number,
  xRange: number[],
  yRange: number[] 
}

export const defaultPaneContext:PaneContext = {
  width: 500,
  height: 500,
  xRange: [0, 0],
  yRange: [0, 0],
}

export interface ViewBox {
  x: [number, number],
  y: [number, number]
}