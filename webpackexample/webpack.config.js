const webpack = require('webpack'); // node default understands CommonJS module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        filename: 'bundle.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude:/node_modules/
            } 
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [new HtmlWebpackPlugin({
        template:path.resolve(__dirname, './src/index.html')
    })]
}

module.exports = config;