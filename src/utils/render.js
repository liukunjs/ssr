import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet"
import React from 'react';
export const render = (req,store,Router,context) => {
      // location 可以监控前段的路由，从而让后端得知
      // <router/>只有方法才可以这样写
      // 因为前端是使用后端的router所以这里的store被初始化后在调用router时是通过home里面的getList这个获取props后端的list
    const Contain = renderToString(<Provider store = {store}><StaticRouter context={context} location={req.path}>{Router}</StaticRouter></Provider>);
    // 为了让前端的逻辑点击事件等可以操作所以得留一个入口，"index.js"
    const css=context.css.join("/n")
    const helmet = Helmet.renderStatic()
    console.log(css,"css")
    return (
        `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <style>${css}</style>
            </head>
            <body>
            <div id="root">${Contain}</div>
            <script>window.context=${JSON.stringify(store.getState())}</script>
            <script src='/index.js'></script>
            </body>
        </html>
        `
    )
}