declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      CartesianCoordinates: typeof import('mafsv')['CartesianCoordinates']
      Line: typeof import('mafsv')['Line']
      Mafs: typeof import('mafsv')['Mafs']
      MovablePoint: typeof import('mafsv')['MovablePoint']
      PlotOfx: typeof import('mafsv')['PlotOfx']
      Point: typeof import('mafsv')['Point']
      Text: typeof import('mafsv')['Text']
      Vector: typeof import('mafsv')['Vector']
       
  }
}
export {}