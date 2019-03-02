import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {Router} from '../router';
import {getClientStore} from '../store/store';
import * as ReactRedux from "react-redux";
import * as Redux from 'react';
console.log(Redux,'redux')
console.log(ReactRedux,'ReactRedux')
let store = getClientStore(window.context)
console.log(window.context,"dfdas")
const App = () =>{
   return (
       <Provider store={store}>
           <BrowserRouter>{Router}</BrowserRouter>
       </Provider>
   )
} 
ReactDom.hydrate(<App/>,document.getElementById('root'));