let webpack = require('webpack'),
    path = require('path'),
    BUILD_DIR = path.resolve(__dirname, 'build'),
    APP_DIR = path.resolve(__dirname, 'files');



module.exports = {
    entry: APP_DIR + '/js/main.js',
    output: {
        path: BUILD_DIR + '/js/',
        filename: 'bundle.js'
    },
    debug:false,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },

        ]
    }
}