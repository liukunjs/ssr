import React,{Component} from 'react'
export default class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div>
                <div>alibaba is goning ican play a</div>
                <div onClick={()=>{console.log('ccc')}}>click me</div>
            </div>
        )
    }
}

