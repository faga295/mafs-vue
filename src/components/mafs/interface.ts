import { InjectionKey } from "vue"

export const mafsContextInjectionKey:InjectionKey<MafsContext> = Symbol('mafs-context')

export interface MafsContext {
  scaleX: number,
  scaleY: number,
}

export const paneContextInjectionKey:InjectionKey<PaneContext> = Symbol('pane-context')

export interface PaneContext {
  width: number,
  height: number,
}