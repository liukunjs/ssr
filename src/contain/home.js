import React,{Component} from 'react';
import { connect } from 'react-redux';
 class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            mark:true
        }
    }
    toDo=()=>{
        let action = {
            type: Number(this.state.mark),
            text: 'love cc'
        }
        this.props.dispatch(action)
        this.setState({
            mark: !this.state.mark
        })
    }
    render(){
        const { name } = this.props
        return(
            <div>
                <div>this a onemore time</div>
                <div>{name}</div>
                <div onClick={this.toDo}>click me</div>
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    return{
        name: state.name
    }
}
export default connect(mapStateProps,null)(Home)
