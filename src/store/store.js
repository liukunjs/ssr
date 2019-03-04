import { createStore ,applyMiddleware} from 'redux';
import  reducer  from '../reducer/reducer';
import thunk from 'redux-thunk';
import axios from "axios";
var clientURL = axios.create({
    baseURL:"/"
})
var serverUrl = axios.create({
    baseURL:"https://www.easy-mock.com"
})
export const getStore = () =>{
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverUrl)));
}
export const getClientStore =(defaultData)=>{
    return createStore(reducer,defaultData,applyMiddleware(thunk.withExtraArgument(clientURL)))
}