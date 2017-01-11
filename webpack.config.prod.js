var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");






module.exports = {

    entry: [
        path.resolve('app/files/js/App.js')
    ],

    output: {
        path: path.resolve('dist/'),
        filename: 'files/js/all.js'
    },

    plugins: [

        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new ExtractTextPlugin("files/css/[name].css")

    ],

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            },

            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules)/,

            },

            {
                test: /(\.png|\.jpg)/,
                loader: 'url-loader?limit=20000'
            }

        ]
    }

};
