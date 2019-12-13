/*
 * This webpack config produces two js files: one is npm module file ReactCollapsibleComponent.js,
 * the other one is example app js file appExample.js in dist directory.
 * Devzone Tech Ltd.
 * https://www.devzonetech.com/
 */

var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, './src/')

var config = {
    cache: true,
    entry: {
        index: APP_DIR + '/index.js',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        library: 'shared-components',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'production',
    module : {
        rules: [
            {
                test: /(\.scss|\.css)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    require.resolve('sass-loader') + '?sourceMap'
                ]
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: [ '@babel/preset-env' ],
                    plugins: [ '@babel/transform-runtime', '@babel/transform-regenerator' ]
                }
            },
        ],
    },
    optimization: {
        minimize: true
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
}

module.exports = config
