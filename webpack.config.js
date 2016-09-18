"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/entry.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
		  extensions: ['', '.js', '.jsx']
	  },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            React: "react",
            ReactDOM: "react-dom",
            reactRouter: "react-router"
        })
    ],
    module: {
      loaders
    },
    devServer: {
      inline:true,
      host: '0.0.0.0',
      port: 9999
    }
};
