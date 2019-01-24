import { renderToString } from "react-dom/server";
import { StaticRouter,matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Router,routers} from '../router.js'
import React from 'react';
import getstore from "../store/store";
let store = getstore()
export const render = (req) => {
    const promises = [];
    routers.some(route => {
        const match = matchPath(req.path, route);
        console.log(JSON.stringify(route.loadData(store)),"match")
        if (match) promises.push(route.loadData(store));
        return match;
    });
    console.log(JSON.stringify(promises),'sringif')
    Promise.all(promises).then(data => {
        console.log(data,'data')  
      });
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