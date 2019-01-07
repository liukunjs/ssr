import React,{Component} from 'react';
import { connect } from 'react-redux';
 class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        console.log(this.props)
        // const { name } = this.props
        return(
            <div>
                <div>alibaba is goning ican play a</div>
                {/* <div>{name}</div> */}
                <div onClick={()=>{console.log('ccc')}}>click me</div>
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    console.log(state,'asdf')
    // return{
    //     name: state
    // }
}
export default connect(mapStateProps,null)(Home)
