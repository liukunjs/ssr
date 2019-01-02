var path = require('path')
var basis = require('./webpack.basis.js')
// var merge = require('webpack-merge')
module.exports = {
    mode: 'development',
    entry: './s/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
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