var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: [
        path.resolve('files/js/main.js')
    ],
    output: {
        filename: 'files/js/bundle.js',
    },
    debug:false,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },

        ]
    }
}