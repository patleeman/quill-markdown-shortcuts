var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "index.js"),
    output: {
        path: path.join(__dirname),
        filename: "index.bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
