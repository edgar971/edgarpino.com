var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: [
        path.resolve('files/js/main.js')
    ],
    output: {
        path: path.resolve('files/'),
        filename: 'js/all.js'
    },
    debug:false,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },

        ]
    }
}