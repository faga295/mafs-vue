import { 
  defineComponent,
  ref,
  h
} from "vue"

export const mafsProps = {
  width: {
    type: Number
  }
}
const Mafs = defineComponent({
    name:'Mafs',
    props: mafsProps,
    setup(props){
      
    },
    render(){
        return (
          <svg width={this.width}>
            {
              this.$slots.default?.()
            }
          </svg>
       )
    }
})
export default Mafs
export type mafsType = typeof Mafs