import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import getStore from '../store/store';
import * as ReactRedux from "react-redux";
import * as Redux from 'react';
console.log(Redux,'redux')
console.log(ReactRedux,'ReactRedux')
const App = () =>{
   return (
       <Provider store={getStore()}>
           <BrowserRouter>{Router}</BrowserRouter>
       </Provider>
   )
} 
ReactDom.hydrate(<App/>,document.getElementById('root'));