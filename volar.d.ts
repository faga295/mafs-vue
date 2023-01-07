import type { mafsType } from './src/components/mafs/mafs'
import mafs, {mafsProps} from './src/components/mafs/mafs'
import type {DefineComponent} from '@vue/runtime-core'

declare module 'vue' {
    export interface GlobalComponents {
        // Mafs: DefineComponent<typeof mafsProps>
        Mafs: typeof import('mafsv')['Mafs'],
        CartesianCoordinates: typeof import('mafsv')['CartesianCoordinates']
  }
}
  export {}