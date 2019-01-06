import React from "react";
import { Route } from "react-router-dom";
import Home from './contain/home';
import Login from './contain/login';
import Header from './components/header.js'
export default(
    <div>
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
    </div>
)