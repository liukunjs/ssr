module.exports = {
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