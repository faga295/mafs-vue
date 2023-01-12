declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      CartesianCoordinates: typeof import('mafsv')['CartesianCoordinates']
      Mafs: typeof import('mafsv')['Mafs']
      PlotOfx: typeof import('mafsv')['PlotOfx']
       
  }
}
export {}