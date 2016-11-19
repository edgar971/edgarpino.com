var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');





module.exports = {
    devtool: 'cheap-eval-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        path.resolve('app/files/js/App.js')
    ],

    output: {
        path: path.resolve('dist/'),
        filename: 'files/js/all.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })

    ],

    module: {
        loaders: [
            {
                test: /(\.scss$|\.css$)/,
                loaders: ["style", "css", "sass"]
            },

            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules)/,

            }

        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }

};
