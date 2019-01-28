import express from 'express';
var proxy = require('http-proxy-middleware');
import {render} from './utils/render.js';
var app = express();
// app.use(proxy('/', { target: '127.0.0.1:8080', changeOrigin: true }));
app.use(express.static('public'));
app.get('*',function(req,res){
    res.send(render(req));
});
// node 本地请求的时候默认端口 为 80 所以的修改
var serve = app.listen(3002);