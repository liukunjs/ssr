import React,{Component} from 'react'
import style from "./login.css"
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentWillMount(){
        if(this.props.staticcontext){
            this.props.staticcontext.css.push(style._getCss())
        }
    }
    render(){
        return(
            <div className={style.test}>
                this is login 
            </div>
        )
    }
}
Login.loadData =()=>{

}
export default Login;