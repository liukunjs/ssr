import React,{Component} from "react"
export default ( defaultComponent ,style)=>{
    console.log(Component,"com")
    return class Henent extends Component{
        constructor(props){
            super(props)
            this.status = {}
        }
        componentWillMount(){
            if(this.props.staticContext){
                this.props.staticContext.css.push(style._getCss())
            }
        }
        render(){
            return (
                <defaultComponent {...this.props}/>
            )
        }
    }
}