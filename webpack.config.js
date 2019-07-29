var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
      "markdownShortcuts": "./src/index.js",
      "markdownShortcuts.min": "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'MarkdownShortcuts'
    },
    externals: {
        quill: 'quill',
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
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
    ],
    devtool: 'source-map'
};
