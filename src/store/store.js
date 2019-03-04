import { createStore ,applyMiddleware} from 'redux';
import  reducer  from '../reducer/reducer';
import thunk from 'redux-thunk';
import axios from "axios";
// 在使用 代理服务器后地址 /mock/5bac6c530132334db7167131/example_copy/query，但是在后端的时候会调用自己工作的绝地地址，所以我们得做一些区别
var clientURL = axios.create({
    baseURL:"/"
})
var serverUrl = axios.create({
    baseURL:"https://www.easy-mock.com"
})
export const getStore = () =>{
    // 通过thunk 可以传递一个参数来区别服务器和客户端的store是不同的
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverUrl)));
}
export const getClientStore =(defaultData)=>{
    return createStore(reducer,defaultData,applyMiddleware(thunk.withExtraArgument(clientURL)))
}