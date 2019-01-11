import express from 'express';
import {render} from './utils/render.js';
var app = express();
app.use(express.static('public'));
app.get('*',function(req,res){
    res.send(render(req));
});
var serve = app.listen(3002);