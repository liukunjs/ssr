var path = require('path')
var nodeExternals = require('webpack-node-externals')
var merge = require ("webpack-merge")
var basis = require('./webpack.basis.js')
const serverFonfig = {
    target: "node",
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // 打包时候可以避免 打包nodemodules里面的内容，nodeExternals({可以加入白名单})
    externals:[nodeExternals()],
}
module.exports = merge(serverFonfig,basis)
