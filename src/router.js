import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from './contain/home';
import Login from './contain/login';
import Header from './components/header.js'
export const routers = [
    {
        path:'/',
        component:Home,
        exact:true,
        loadData: Home.loadData
    },
    {
        path:'*',
        component:Header,
        // exact:true,
        loadData: Home.loadData
    },
    {
        path: '/login',
        component:Login,
        exact:true,
        loadData:Login.loadData,
    }
]

export const Router =  (<div>
                            <Header/>
                            <Switch>
                                 {routers.map((route,index)=><Route {...route} key={index}></Route>)}
                            </Switch>
                </div>
                      ) 