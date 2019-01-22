import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import query from '../action/query';
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
    all=()=>{
        this.props.getAll()
    }
    componentDidMount(){
        let { dispatch } = this.props
        console.log(bindActionCreators(actionCreate().a,dispatch,'bindActionCreators'));
        this.props.query();
    }
    render(){
        const { name } = this.props
        console.log(this.props,'props')
        return(
            <div>
                <div>this a onemore time</div>
                <div>{name}</div>
                <div onClick={this.toDo}>click me</div>
                <div onClick={this.all}>get money</div>
                {/* <div onClick={this.props.nine}>89</div> */}
            </div>
        )
    }
}
const mapStateProps = (...props)=>{
    const state = props[0];
    // mapStateProps的第二个参数是一个 this.props
    console.log(state,'state')
    return{
        name: state.reducer1.name,
        list: state.reducer.data
    }
}
const actionCreate = ()=>{
    return {
       a: ()=>{
           return{type:7}
       },
       b: ()=>{
           return {type:8}
       }
    }
}
const mapDispatchToProp = (dispatch) =>{
    return {
        getAll:()=>{
            dispatch({
                type:5,
            })
        },
        query:()=>{
            dispatch(query());
        }
    }
}
Home.loadData=(match)=>{
    console.log(match,'homematch')
    return match
}
export default connect(mapStateProps,mapDispatchToProp)(Home)
