import React,{Component} from 'react';
import { Link } from 'react-router-dom'
export default class Header extends Component {
    constructor (props){
        super(props)
        this.state = {}
    }
    render (){
        return (
            <div>
                <Link to='/'>home</Link>
                <br/>
                <Link to='/login'>login</Link>
            </div>
        )
    }
}