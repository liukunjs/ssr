import { createStore ,applyMiddleware} from 'redux';
import { reducer } from '../reducer/reducer';
import thunk from 'redux-thunk';
const getStore = () =>{
    return createStore(reducer,applyMiddleware(thunk));
}
export default getStore