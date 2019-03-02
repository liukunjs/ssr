import express from 'express';
var proxy = require('http-proxy-middleware');
import {render} from './utils/render.js';
import { matchRoutes } from "react-router-config";
import {Router,routers} from './router.js'
import {getStore} from "./store/store";
let store = getStore()
var app = express();
// app.use(proxy('/', { target: '127.0.0.1:8080', changeOrigin: true }));
app.use(express.static('public'));
app.get('*',function(req,res){
    const promises = [];
    const match = matchRoutes(routers, req.path);
    match.forEach((item)=>{
        if(item.route.loadData){
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(data => {
        // console.log(store.getState())
        res.send(render(req,store,Router));        
      })
});
// node 本地请求的时候默认端口 为 80 所以的修改
var serve = app.listen(3002);