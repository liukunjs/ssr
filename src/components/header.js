import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import style from "./header.css"
export default class Header extends Component {
    constructor (props){
        super(props)
        this.state = {}
    }
    componentWillMount(){
        console.log(this.props.staticContext,"context")
        if(this.props.staticContext){
            this.props.staticContext.css.push(style._getCss())
        }
    }
    render (){
        return (
            <div style={style.tesu}>
                <Link to='/'>home</Link>
                <br/>
                <Link to='/login'>login</Link>
            </div>
        )
    }
}