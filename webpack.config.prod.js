var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');





module.exports = {

    entry: [
        path.resolve('app/files/js/main.js')
    ],

    output: {
        path: path.resolve('dist/'),
        filename: 'files/js/all.js'
    },

    plugins: [

        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })

    ],

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },

            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules)/,

            }

        ]
    }

};
