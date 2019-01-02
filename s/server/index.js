import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import Home from '../contain/home';
const Contain = renderToString(<Home/>);
var app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
    res.send(
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
        );
});
var serve = app.listen(3000)