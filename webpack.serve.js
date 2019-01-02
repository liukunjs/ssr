var path = require('path')
var nodeExternals = require('webpack-node-externals')
var merge = require ("webpack-merge")
// var basis = require('./webpack.basis.js')

module.export = {
    target: "node",
    mode: 'development',
    entry: './s/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals:[nodeExternals()],
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node-modules/,
            options: {
                'presets': ['react','stage-0',['env',{
                    targets: {
                       browser: ['last 2 versions'] 
                    }
                }]]
            }
        }]
    }
}
