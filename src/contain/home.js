import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Helmet} from "react-helmet"
import query from '../action/query';
import style from "./home.css"
import heighComponent from "../utils/heightComponent.js"
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
    // componentWillMount(){
    //     // 判断是服务器环境
    //     if(this.props.staticContext){
    //         // 负值css属性，在node端获取
    //         this.props.staticContext.css.push(style._getCss())
    //     }
    // }
    componentDidMount(){
        let { dispatch } = this.props
        console.log(this.props,"props")
        console.log(bindActionCreators(actionCreate().a,dispatch,'bindActionCreators'));
        // 客户端请求的store，请求数据
        this.props.query();
    }
    getList =()=>{
        // console.log(this.props.list,'[[')
        const { list } =this.props
        console.log(list.map,'asdf')
            return list.map(v=>
             (
                <div key={v}>{v}</div>
            )
        )
    }
    render(){
        const { name,list } = this.props
        // console.log(this.props,'props')
        // Helmet用作标题的渲染，提高搜索引擎的优化
        return(
            <div>
                <Helmet>
                    <title>
                        刘坤的ssr
                    </title>
                    <meta name="description" content="刘加油啊棒棒哒"></meta>
                </Helmet>
                <div>this a onemore time</div>
                <div>{name}</div>
                <div onClick={this.toDo}>click me</div>
                <div onClick={this.all}>get money</div>
                {/* <div onClick={this.props.nine}>89</div> */}
                {list?this.getList():""}
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    return{
        name: state.reducer1.name,
        list: state.reducer.list
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
// 后端使用loadData调用action 触发一次后端store,请求数据
Home.loadData = (store) =>{
    return store.dispatch(query())
}
export default connect(mapStateProps,mapDispatchToProp)(heighComponent(Home,style))

