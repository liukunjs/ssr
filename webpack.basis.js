module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node-modules/,
            options: {
                presets: ['react','es2015', ['env',{
                    targets: {
                       browser: ['last 2 versions'] 
                    }
                    // state-0必须写后面
                }],'stage-0',]
            }
        }]
    }
}