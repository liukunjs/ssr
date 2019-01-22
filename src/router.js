import React from "react";
import { Route } from "react-router-dom";
import Home from './contain/home';
import Login from './contain/login';
import Header from './components/header.js'
export const routers = [
    {
        path:'/',
        components:Home,
        exact:true,
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
                    <Header>
                        {routers.map((route)=><Route {...route}></Route>)}
                    </Header>
                </div>
                      ) 