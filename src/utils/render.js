import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Router,routers} from '../router.js'
import React from 'react';
import getstore from "../store/store";
import { matchRoutes } from "react-router-config";
let store = getstore()
export const render = (req) => {
    const promises = [];
    const match = matchRoutes(routers, req.path);
    match.forEach((item)=>{
        if(item.route.loadData){
            console.log('jinlaile....')
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(data => {
        console.log(data,'data')  
      }).catch((e)=>console.log(e));
    const Contain = renderToString(<Provider store = {store}><StaticRouter context={{}} location={req.path}>{Router}</StaticRouter></Provider>);
    return (
        `
        <html>
            <head>
                <title>
                </title>
            </head>
            <body>
            <div id="root">${Contain}</div>
            <script src='/index.js'></script>
            </body>
        </html>
        `
    )
}