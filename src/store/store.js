import { createStore ,applyMiddleware} from 'redux';
import  reducer  from '../reducer/reducer';
import thunk from 'redux-thunk';
export const getStore = () =>{
    return createStore(reducer,applyMiddleware(thunk));
}
export const getClientStore =(defaultData)=>{
    return createStore(reducer,defaultData,applyMiddleware(thunk))
}