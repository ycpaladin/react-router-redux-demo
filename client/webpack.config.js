var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: path.join(__dirname, 'src'),
        vendors: ['react', 'redux', 'jquery']
    },
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 9001
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react&presets[]=es2015'
                // query: {
                //     presets: ['react', 'es2015']
                // }
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'sass')
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        // }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new HtmlWebPackPlugin({
            title: 'test app',
            filename: 'index.html',
            template:'index.html',
            inject: 'body'
        })
    ]
};