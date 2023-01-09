import { defineComponent, computed, h, inject } from "vue"
import { range } from '../../utils/range'
import { mafsContextInjectionKey } from "../mafs/interface"

const gridPatternProps = {
	id: {
		type: String
	},
	xLines: {
		type: Number,
		default: 1
	},
	yLines: {
		type: Number,
		default: 1
	},
	xSubDivision: {
		type: Number
	},
	ySubDivsion: {
		type: Number
	}
}
export default defineComponent({
	name: 'GridPattern',
	props: gridPatternProps,
	setup(props){
		const mafsContext = inject(mafsContextInjectionKey)
		const scaleX = mafsContext?.scaleX ?? 42
		const scaleY = mafsContext?.scaleY ?? 42
		// scale to real pixel
		const width = computed(() => props.xLines * scaleX)
		const height = computed(() => props.yLines * scaleY)

		const xs = range(0, props.xLines, props.xSubDivision || 1)
		const ys = range(0, props.yLines, props.ySubDivsion || 1)
		console.log(xs, ys)
        
		return {
			width,
			height,
			xs,
			ys
		}
	},
	render(){
		return (
			<pattern id={this.id}  patternUnits="userSpaceOnUse" width={this.width} height={this.height}>
				{this.xs.map((xAxis: number) => (
					<line
						x1={xAxis} 
						x2={xAxis} 
						y1={0} 
						y2={this.height} 
						style={{stroke: 'var(--m-line-color)'}}
					></line>
				))}
				{this.ys.map((yAxis: number) => (
					<line 
						x1={0}  
						y1={yAxis}
						x2={this.width}
						y2={yAxis}
						style={{
							stroke: 'var(--m-line-color)'
						}}
					>
					</line>
				))}
			</pattern>
		)
	}
})