var path = require('path')
var basis = require('./webpack.basis.js')
var merge = require('webpack-merge')
clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
}
module.exports = merge(clientConfig,basis) ;