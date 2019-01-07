import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from '../router.js'
import React from 'react';
import getstore from "../store/store";
export const render = (req) => {
    const Contain = renderToString(<Provider store = {getstore()}><StaticRouter context={{}} location={req.path}>{Router}</StaticRouter></Provider>);
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