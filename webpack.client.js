var path = require('path')
var basis = require('./webpack.basis.js')
var merge = require('webpack-merge')
// __filename 是node的全局变量 Node.js中，在任何模块文件内部，可以使用__filename变量获取当前模块文件的带有完整 绝对路径 的文件名
console.log(__filename,"filename")
// __dirname是个全局变量，代表完整目录名称，再打包和生产时保持不变
console.log(__dirname,"dirname")
// 表示当前node的工作环境，在打包和发布时可能会发生变化
console.log(process.cwd(),"cwd")
clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        // 因此为了保持路径的统一性使用__dirname
        path: path.resolve(__dirname, 'public')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use: ['style-loader',{
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                // 定义模块化
                modules: true,
                //定义本地的css文件名
                localIdentName: '[name]_[local]_[hash:base64:4]'
            }
        }]
    }]
    }
}
module.exports = merge(clientConfig,basis) ;