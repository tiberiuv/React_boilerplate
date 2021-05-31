require('dotenv').config()
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const autoprefixer = require('autoprefixer')

const buildEnv = process.env.NODE_ENV || 'production'
const isProduction = buildEnv === 'production'

let config = {
    development: {
        minify: false,
        sourceMap: 'cheap-module-source-map',
        hotReload: true,
    },
    production: {
        minify: true,
        sourceMap: 'sourcemap',
        hotReload: false,
    },
}

config = config[buildEnv]

let fileName = '[name].[contenthash:10].js'
let chunkFilename = '[name].[contenthash:10].chunk.js'

if (config.hotReload) {
    fileName = '[name].js'
    chunkFilename = '[name].chunk.js'
}

const postCssOptions = {
    sourceMap: true,
}

module.exports = {
    mode: isProduction ? buildEnv : 'development',
    entry: {boiler_plate: ['./src/index']},
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        sourceMapFilename: '[file].map',
        filename: fileName,
        chunkFilename: chunkFilename,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {loader: 'postcss-loader', options: postCssOptions},
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: './index.html',
            inject: 'body',
            buildEnv,
            minify: config.minify,
        }),
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: config.source_map,
}
