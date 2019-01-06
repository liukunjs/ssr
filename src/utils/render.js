import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import Router from '../router.js'
import React from 'react';
export const render = (req) => {
    const Contain = renderToString(<StaticRouter context={{}} location={req.path}>{Router}</StaticRouter>);
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