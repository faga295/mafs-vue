import {mafsProps} from './src/components/mafs'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        Mafs: typeof import('mafsv')['Mafs'],
        CartesianCoordinates: typeof import('mafsv')['CartesianCoordinates']
  }
}
export {}