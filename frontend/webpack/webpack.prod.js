//////////////////////////////////////////////////////////////
// This file is part of project the World-News for Molinos
// Author - Ivan Popov
// Site - ivan-popov.ru
// Copyright (C) 2018.
//////////////////////////////////////////////////////////////
/* global process */

const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//////////////////////////////////////////////////////////////
const devMode = process.env.NODE_ENV !== 'production';

//////////////////////////////////////////////////////////////
module.exports = {
    context: resolve(__dirname, '../src'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)(\?.*$|$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][hash].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][hash].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    entry: '../src/index.js',
    output: {
        filename: 'js/bundle.[hash].min.js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    node: {
        child_process: 'empty',
        fs: 'empty',
        module: 'empty'
    },
    plugins: [],
    devtool: 'eval-source-map'
};


//////////////////////////////////////////////////////////////