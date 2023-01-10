import { range } from "../../utils/range"
import { defineComponent, h, Fragment, inject, PropType } from "vue"
import { defaultMafsContext, defaultPaneContext, mafsContextInjectionKey, paneContextInjectionKey } from "../mafs/interface"
import GridPattern from "./GridPattern"
import type { Axis } from "./interface"
import './style/index.css'
let increment = 1

const defaultAxis = {
  line: 1,
  labels: (index:number) => String(index)
}
export const cartesianCoordinatesProps = {
  xAxis: {
    type: Object as PropType<Axis>,
    default:() => defaultAxis
  },
  yAxis: {
    type: Object as PropType<Axis>,
    default:() => defaultAxis
  },
  subdivision: {
    type: Number,
    default: 1,
  }
}
export default defineComponent({
  name: "CartesianCoordinates",
  props: cartesianCoordinatesProps,
  setup(props){
    const id = `mafs-grid-${increment++}`
    const paneContext = inject(paneContextInjectionKey, defaultPaneContext)
    const mafsContext = inject(mafsContextInjectionKey, defaultMafsContext)

    const { width, height } = paneContext

    const { scaleX, scaleY } = mafsContext

    const { line: xLine } = props.xAxis
    const { line: yLine } = props.yAxis
    const xGridPixel = xLine * scaleX
    const yGridPixel = yLine * scaleY

    const xMin = -Math.ceil(width/2/xGridPixel)
    const xMax = Math.ceil(width/2/xGridPixel)

    const yMin = -Math.ceil(height/2/yGridPixel)
    const yMax = Math.ceil(height/2/yGridPixel)
    const xs = range(-Math.ceil(width/xGridPixel), Math.ceil(width/xGridPixel), props.xAxis.line)
        
    const ys = range(-Math.ceil(height/yGridPixel), Math.ceil(height/yGridPixel), props.yAxis.line)

    

    paneContext.xRange =  [xMin, xMax]
    paneContext.yRange =  [yMin, yMax]
        
    return {
      id,
      width,
      height,
      xs,
      ys,
      xGridPixel,
      yGridPixel
    }
  },
  render(){
    const XLables:JSX.Element = (
      <g>
        {
          this.xs.map((line) => {
            if(!line) return
            return <text x={line * this.xGridPixel} y={20}>{this.xAxis.labels(line)}</text>
          })
        } 
      </g>
    )
    const YLabels: JSX.Element = (
      <g>
        {
          this.ys.map((line) => {
            if(!line) return
            return <text x={5} y={-line * this.yGridPixel}>{this.yAxis.labels(line)}</text>
          })
        }  
      </g>
    )
    return (
      <>
        <defs>
          <GridPattern id={this.id} subdivision={this.subdivision} xLines={this.xAxis.line} yLines={this.yAxis.line}></GridPattern>
        </defs>
        <rect fill={`url(#${this.id})`} width={this.width} height={this.height} x={-Math.round(this.width/2)} y={-Math.round(this.height/2)}></rect>
        <line x1={10000000} x2={-10000000} y1={0} y2={0} style={{stroke: 'var(--m-grid-axis-color)'}}></line>
        <line x1={0} x2={0} y1={10000000} y2={-10000000} style={{stroke: 'var(--m-grid-axis-color)'}}></line>
				
        {XLables}
        {YLabels}
      </>
    )
  }
})